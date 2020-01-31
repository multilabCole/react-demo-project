import React, { useState, useEffect } from "react";
import Modal from "../../../../node_modules/react-bootstrap/Modal";
import propTypes from "../../../../node_modules/prop-types";
import TextInput from "../TextInput";
import ForgotPassword from "./ForgotPassword";
import { ModalBody } from "react-bootstrap";
import { loginUser } from "../../../redux/actions/userAction";
import { connect } from "react-redux";

const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Login = ({
  users,
  loginUser,
  currentUser,
  setCurrentUser,
  setUserLoggedIn,
  ...props
}) => {
  useEffect(() => {
    loginUser().catch(error => {
      console.log("error", error);
    });
  }, []);

  const [errors, setErrors] = useState({});

  // clear out values when closing the modal
  function reset() {
    setCurrentUser({});
    setErrors({});
  }

  // work on handling validation as the user types instead
  // of just when they submit the form

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  function formIsValid() {
    const { userName, password } = currentUser;
    const errors = {};
    if (!userName) {
      errors.userName = "Email Address is mandatory";
    } else if (!emailValidationRegex.test(userName)) {
      errors.userName =
        "Invalid entry. Please enter valid email address, for example, john@smith.com.";
    }
    if (!password) errors.password = "Password is mandatory.";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  // client side validation for login
  // no express server setup yet
  function handleLogin(event) {
    event.preventDefault();

    // Toggle errors to show
    if (!formIsValid()) return;

    // check to see if the user exists
    const match = users.find(
      ({ userName, password }) =>
        userName === currentUser.userName && password == currentUser.password
    );
    if (match) {
      setCurrentUser(prevUser => ({
        ...prevUser,
        firstName: match.firstName
      }));
      setUserLoggedIn(true);
      props.handleClose("login");
    } else {
      // final validation for displaying correct error messages
      if (
        (currentUser.password && currentUser.password.length > 0) ||
        (currentUser.userName && currentUser.userName.length > 0)
      ) {
        setErrors({
          userNameInvalid:
            "Log in unsuccessful. The details entered don't match our records, please try again."
        });
      } else {
        setErrors({
          userNameInvalid:
            "Log in unsuccessful. The details entered don't match our records, please try again.",
          ...errors
        });
      }
    }
  }

  return (
    <>
      <Modal
        dialogClassName="modal-400w"
        centered
        show={props.show}
        onHide={() => props.handleClose("login")}
        onEnter={() => reset()}
      >
        <Modal.Header>
          <Modal.Title className="modal-title">
            <strong>Log In</strong>
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleLogin}>
          <Modal.Body>
            {errors.userNameInvalid && (
              <div className="text-danger font-weight-bold" role="alert">
                {errors.userNameInvalid}
              </div>
            )}
            <TextInput
              name={"userName"}
              placeholder={"Email Address"}
              isFormGroup={true}
              error={errors.userName}
              onChange={handleChange}
            />
            <TextInput
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              isFormGroup={true}
              error={errors.password}
              onChange={handleChange}
            />
            <a
              className="forgotPasswordTextLink"
              href="#"
              onClick={() => props.handleShow("forgot")}
            >
              Forgotten Password?
            </a>
          </Modal.Body>
          <Modal.Footer>
            <button className="cc-button-primary">Log In</button>
            <button
              className="cc-button-secondary"
              onClick={() => {
                props.handleClose("login");
              }}
            >
              Cancel
            </button>
          </Modal.Footer>
        </form>
        <ModalBody id="signUp">
          <hr />
          <div className="signUpDiv">
            <h4>{`Don't have an account?`}</h4>
            <button
              className="cc-button-primary"
              onClick={() => {
                props.handleClose("login");
                props.handleShow("Reg");
              }}
            >
              Create Account
            </button>
          </div>
        </ModalBody>
      </Modal>
      <ForgotPassword
        show={props.showForgot}
        handleShow={props.handleShow}
        handleClose={props.handleClose}
      />
    </>
  );
};

Login.propTypes = {
  show: propTypes.bool,
  handleShow: propTypes.func,
  handleClose: propTypes.func,
  showForgot: propTypes.bool,
  users: propTypes.array
};

// determines what state is passed to our component via props
// ownProps is a reference to the components own props
function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}
// determines what actions we expose to the component
// it's optional and if omitted then our component
// gets a dispatch prop injected automatically

// if you set this as an object instead of a function call then the propeties will be wrapped with a dispatch by default

const mapDispatchToProps = {
  // actioncreators must be fire from dispatch
  // bindActionCreators returns an object mimicing the original object except they're all wrapped in dispatch
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

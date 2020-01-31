import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import propTypes from "prop-types";
import TextInput from "../TextInput";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { createUser, loginUser } from "../../../redux/actions/userAction";
import { newUser } from "../../../../tools/mockData";

const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Registration = ({
  show,
  handleClose,
  users,
  loginUser,
  createUser,
  ...props
}) => {
  useEffect(() => {
    loginUser().catch(error => {
      console.log("error", error);
    });
  }, []);

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({ ...newUser });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  function formIsValid() {
    const { firstName, lastName, userName, password, confirmPassword } = user;
    const errors = {};
    if (!firstName) errors.firstName = "First Name is mandatory.";
    if (!lastName) errors.lastName = "Last Name is mandatory.";
    if (!userName) {
      errors.userName = "Email Address is mandatory";
    } else if (!emailValidationRegex.test(userName)) {
      errors.userName =
        "Invalid entry. Please enter valid email address, for example, john@smith.com.";
    }
    if (!password) errors.password = "Password is mandatory.";
    if (!confirmPassword)
      errors.confirmPassword = "Please enter your password again.";
    if (confirmPassword && password && confirmPassword !== password)
      errors.confirmPassword =
        "The passwords entered do not match, please try again.";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();

    if (!formIsValid()) return;

    createUser(user)
      .then(() => {
        // setup to automatically login the user once they have created their account
        handleClose("Reg")
        console.log("successful creation!!!", users);
      })
      .catch(error => {
        console.log("there was an error on creation", error);
      });
  }

  function reset() {
    setUser({});
    setErrors({});
  }

  return (
    <>
      <Modal
        dialogClassName="modal-400w"
        centered
        show={show}
        onHide={() => handleClose("Reg")}
        onEnter={() => reset()}
      >
        <Modal.Header>
          <Modal.Title>Create an Account</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSave}>
          <Modal.Body>
            <TextInput
              name={"firstName"}
              placeholder={"First Name"}
              onChange={handleChange}
              error={errors.firstName}
            />
            <TextInput
              name={"lastName"}
              placeholder={"Last Name"}
              onChange={handleChange}
              error={errors.lastName}
            />
            <TextInput
              name={"userName"}
              placeholder={"Email Address"}
              onChange={handleChange}
              error={errors.userName}
            />
            <TextInput
              name={"password"}
              type={"password"}
              placeholder={"Password"}
              onChange={handleChange}
              error={errors.password}
            />
            <TextInput
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              type={"password"}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <Row>
              <div className="checkbox">
                {/* htmlFor is used in React/JSX for consistency with the DOM property API */}
                <label htmlFor="emailUpdates">
                  <input
                    name={"emailOptIn"}
                    type="checkbox"
                    id="emailUpdates"
                    onChange={handleChange}
                  />
                  <span style={{ fontSize: "11.9px", marginLeft: "10px" }}>
                    I want to get email updates.
                  </span>
                </label>
              </div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <button className="cc-button-primary">Create Account</button>
            <button
              className="cc-button-secondary"
              onClick={() => handleClose("Reg")}
            >
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

Registration.propTypes = {
  show: propTypes.bool,
  handleShow: propTypes.func,
  handleClose: propTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

const mapDispatchToProps = {
  loginUser,
  createUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

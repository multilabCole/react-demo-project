import React from "../../../../node_modules/react";
import Modal from "../../../../node_modules/react-bootstrap/Modal";
import propTypes from "../../../../node_modules/prop-types";
import TextInput from "../TextInput";
import ForgotPassword from "./ForgotPassword";

const Login = props => {
  return (
    <>
      <Modal
        dialogClassName="modal-400w"
        centered
        show={props.show}
        onHide={() => props.handleClose("login")}
      >
        <Modal.Header>
          <Modal.Title className="modal-title">
            <strong>Log In</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextInput name={"username"} placeholder={"Email Address"} isFormGroup={true} />
          <TextInput name={"password"} placeholder={"Password"} isFormGroup={true} />
          <a href="#" onClick={() => props.handleShow("forgot")}>
            Forgot Password?
          </a>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="cc-button-primary"
            onClick={() => props.handleClose("login")}
          >
            Log In
          </button>
          <button
            className="cc-button-secondary"
            onClick={() => props.handleClose("login")}
          >
            Cancel
          </button>
        </Modal.Footer>
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
  showForgot: propTypes.bool
};

export default Login;

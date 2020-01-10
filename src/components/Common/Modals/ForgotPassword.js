import React from "../../../../node_modules/react";
import Modal from "../../../../node_modules/react-bootstrap/Modal";
import propTypes from "../../../../node_modules/prop-types";
import TextInput from "../TextInput";

const ForgotPassword = props => {
  return (
    <>
      <Modal
        dialogClassName="modal-400w"
        centered
        show={props.show}
        onHide={() => props.handleClose("forgot-backdrop")}
      >
        <Modal.Header>
          <Modal.Title className="modal-title">
            <strong>Reset Password</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-text">
            Enter your email address to receive a secure link to rest your
            password.
          </div>
          <TextInput isFormGroup={true} name={"username"} placeholder={"Email Address"} />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="cc-button-primary"
            onClick={() => props.handleClose("forgot")}
          >
            Send Request
          </button>
          <button
            className="cc-button-secondary"
            onClick={() => props.handleClose("forgot")}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ForgotPassword.propTypes = {
  show: propTypes.bool,
  handleShow: propTypes.func,
  handleClose: propTypes.func
};

export default ForgotPassword;

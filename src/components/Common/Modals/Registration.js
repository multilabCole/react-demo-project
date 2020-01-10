import React from "../../../../node_modules/react";
import Modal from "../../../../node_modules/react-bootstrap/Modal";
import propTypes from "../../../../node_modules/prop-types";
import TextInput from "../TextInput";
import { Row } from "react-bootstrap";

const Registration = ({ show, handleShow, handleClose }) => {
  return (
    <>
      <Modal
        dialogClassName="modal-400w"
        centered
        show={show}
        onHide={() => handleClose("Reg")}
      >
        <Modal.Header>
          <Modal.Title>Create an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextInput name={"firstName"} placeholder={"First Name"} />
          <TextInput name={"lastName"} placeholder={"Last Name"} />
          <TextInput name={"emailAddress"} placeholder={"Email Address"} />
          <TextInput name={"password"} placeholder={"Password"} />
          <TextInput
            name={"confirmPassword"}
            placeholder={"Confirm Password"}
          />
          <Row>
            <div className="checkbox">
              {/* htmlFor is used in React/JSX for consistency with the DOM property API */}
              <label htmlFor="emailUpdates">
                <input type="checkbox" id="emailUpdates" />
                <span style={{ fontSize: "11.9px", marginLeft: "10px" }}>
                  I want to get email updates.
                </span>
              </label>
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="cc-button-primary"
            onClick={() => handleClose("Reg")}
          >
            Create Account
          </button>
          <button
            className="cc-button-secondary"
            onClick={() => handleClose("Reg")}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Registration.propTypes = {
  show: propTypes.bool,
  handleShow: propTypes.func,
  handleClose: propTypes.func
};

export default Registration;

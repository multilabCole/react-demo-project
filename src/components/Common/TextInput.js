import React from "../../../node_modules/react";
import propTypes from "../../../node_modules/prop-types";

const TextInput = ({ name, label, onChange, placeholder, value, error,isFormGroup=true }) => {
  let wrapperClass = "form-group";

  if (error && error.length > 0 && isFormGroup) {
    wrapperClass += " " + "has-error";
  }
  return (
    <div className={isFormGroup ? wrapperClass : ""}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  value: propTypes.string,
  error: propTypes.string,
  isFormGroup: propTypes.bool
};

export default TextInput;

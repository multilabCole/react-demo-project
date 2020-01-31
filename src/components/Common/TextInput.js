import React from "../../../node_modules/react";
import propTypes from "../../../node_modules/prop-types";

const TextInput = ({
  name,
  type = "text",
  label,
  onChange,
  placeholder,
  value,
  error,
  isFormGroup = true
}) => {
  let wrapperClass = "form-group";

  if (error && error.length > 0 && isFormGroup) {
    wrapperClass += " " + "has-error";
  }
  return (
    <div className={isFormGroup ? wrapperClass : ""}>
      <label htmlFor={name}>{label}</label>
      {error && <div className="text-danger">{error}</div>}
      <div className="field">
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
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
  isFormGroup: propTypes.bool,
  type: propTypes.string
};

export default TextInput;

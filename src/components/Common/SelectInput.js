import React from "react";
import propTypes from "prop-types";

const SelectInput = ({
  name,
  onChange,
  defaultOption,
  value,
  error,
  options
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
    >
      {options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

SelectInput.propTypes = {
  name: propTypes.string,
  onChange: propTypes.func,
  defaultOption: propTypes.array,
  value: propTypes.string,
  error: propTypes.object,
  options: propTypes.array
}




export default SelectInput;

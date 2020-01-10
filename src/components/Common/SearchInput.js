import React from "../../../node_modules/react";
import propTypes from "../../../node_modules/prop-types";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import { faSearch } from "../../../node_modules/@fortawesome/free-solid-svg-icons";

const SearchInput = ({ name, placeholder }) => {
  return (
    <>
      <input
        className="form-control search-query"
        type="text"
        name={name}
        placeholder={placeholder}
      ></input>
      <div className="input-group-btn">
        <button id="searchSubmit" type="submit" className="btn btn-default form-control">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </>
  );
};

SearchInput.propTypes= {
  name: propTypes.string,
  placeholder: propTypes.string
}

export default SearchInput;

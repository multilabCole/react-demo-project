import { Link } from "../../../../node_modules/react-router-dom";
import propTypes from "../../../../node_modules/prop-types";
import React from 'react'


const HeaderLogo = ({ logoImage }) => {
  return (
    <>
      <Link to="/">
        <img className="col-xs-12 img img-responsive" src={logoImage} alt="" />
      </Link>
    </>
  );
};

HeaderLogo.propTypes = {
  logoImage: propTypes.string
};

export default HeaderLogo;

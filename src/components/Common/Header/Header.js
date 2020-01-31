import React, { useState } from "react";
// eslint-disable-next-line import/no-named-as-default
import Login from "../Modals/Login";
import Registration from "../Modals/Registration";
import propTypes from "prop-types";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import HeaderLogo from "./HeaderLogo";
import cloudLake from "../../../../public/images/cloudlake.png";
import bottomLine from "../../../../public/images/header-btm-line.png";
import SearchInput from "../SearchInput";
import DropdownNavigation from "./DropdownNavigation";


const Header = ({ loggedIn, setLoginStatus, currentUser, setCurrentUser }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showReg, setShowReg] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const handleShow = modal => {
    switch (modal) {
      case "login":
        // set this so the login modal doesn't open when the
        // user is logged in. My account page would take over this
        // functionality
        if (!loggedIn) setShowLogin(true);
        break;
      case "Reg":
        setShowReg(true);
        break;
      case "forgot":
        setShowForgot(true);
        setShowLogin(false);
        break;
      default:
        break;
    }
  };

  const handleClose = modal => {
    switch (modal) {
      case "login":
        setShowLogin(false);
        break;
      case "Reg":
        setShowReg(false);
        break;
      case "forgot":
        setShowForgot(false);
        setShowLogin(true);
        break;
      case "forgot-backdrop":
        setShowForgot(false);
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    setLoginStatus(false)
    setCurrentUser({});
  }

  return (
    <div className="header-background">
      <Row>
        <div className="col-md-4 offset-md-6 text-center">
          <a
            style={{ marginRight: "3px" }}
            href="#"
            onClick={() => handleShow("login")}
          >
            {loggedIn ? `Welcome ${currentUser.firstName}` : "Log In"}
          </a>
          |
          {loggedIn ? (
            <a
              style={{ marginLeft: "3px" }}
              href="#"
              onClick={() => handleLogout()}
            >Log Out</a>
          ) : (
            <a
              style={{ marginLeft: "3px" }}
              href="#"
              onClick={() => handleShow("Reg")}
            >
              Create Account
            </a>
          )}
        </div>
        <div className="col-md-1 offset-md-1 text-center">EN</div>
      </Row>
      <Row>
        {/* Place this into it's own component */}
        <div style={{ marginTop: "18px" }} className="col-md-4 offset-md-8">
          <div style={{ float: "right" }}>
            <FontAwesomeIcon icon={faShoppingCart} flip="horizontal" />
            <a href="#">
              <span style={{ marginLeft: "10px" }}>0 items - $0.00 </span>
            </a>
            <a
              className="cc-button-primary cc-button-header-checkout cc-button-header-checkout"
              role="button"
              style={{ marginLeft: "15px" }}
            >
              <span style={{ color: "#fff" }}>Checkout</span>
            </a>
          </div>
        </div>
      </Row>
      <Row>
        <div className="col-md-3 logo">
          <HeaderLogo logoImage={cloudLake} />
        </div>
        <div className="col-md-5 offset-md-4 pull-right input-group search">
          <SearchInput
            name={"searchField"}
            placeholder={"Enter your search text here."}
            value={""}
          />
        </div>
      </Row>
      <Row>
        <div className="col-md-12">
          <div
            className="bottom-line"
            style={{ background: `url(${bottomLine})` }}
          />
        </div>
      </Row>
      <Row>
        <DropdownNavigation />
      </Row>
      <Login
        show={showLogin}
        handleShow={handleShow}
        handleClose={handleClose}
        showForgot={showForgot}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        setUserLoggedIn={setLoginStatus}
      />
      <Registration
        show={showReg}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </div>
  );
};

Header.propTypes = {
  showLogin: propTypes.bool,
  handleShow: propTypes.func,
  handleClose: propTypes.func,
  loggedIn: propTypes.bool,
  setLoginStatus: propTypes.func,
  currentUser: propTypes.object,
  setCurrentUser: propTypes.func
};

export default Header;

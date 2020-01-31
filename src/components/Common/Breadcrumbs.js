import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <Breadcrumb.Item active >test</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
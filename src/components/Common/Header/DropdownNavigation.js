import React, { useReducer } from "../../../../node_modules/react";
import { Row, Dropdown } from "../../../../node_modules/react-bootstrap";
import { Link } from "react-router-dom";

const DropdownNavigation = () => {
  function reducer(state) {
    return state ? false : true;
  }

  const [state, dispatch] = useReducer(reducer, false);

  return (
    <nav role="navigation" className="mega-menu navbar">
      <div
        className="collapse navbar-collapse mega-menu-fullwidth-collapse show"
        onMouseOut={() => dispatch()}
      >
        <ul className="nav navbar-nav">
          {/* 
            Information on react-bootstrap dropdowns
            https://react-bootstrap.netlify.com/components/dropdowns/#dropdowns 
        */}
          <Dropdown as="li" navbar={true}>
            <Dropdown.Toggle
              as="span"
              className="dropdown-level-1"
              variant="success"
              id="item-toggle-1"
            >
              <Link to="/category">TEST</Link>
            </Dropdown.Toggle>
            <Dropdown.Menu
              show={state}
              className="dropdown-menu row-full"
              style={{ top: "auto" }}
              as="ul"
            >
              <li>
                <Row>
                  <Dropdown.Item className="col-md-2 category-header">
                    TEST SUB COLLECTION
                  </Dropdown.Item>
                </Row>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </nav>
  );
};

export default DropdownNavigation;

import React, { useReducer } from "react";
import { Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropdownNavigation = () => {
  const initialiState = { show: false };

  function reducer(state) {
    return { show: state.show ? false : true };
  }

  const [state, dispatch] = useReducer(reducer, initialiState);

  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the menu
  // https://reactjs.org/docs/forwarding-refs.html
  // eslint-disable-next-line react/prop-types
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(() => {
          dispatch();
        });
      }}
      onMouseEnter={() => dispatch()}
    >
      {children}
      <b className="caret" />
    </span>
  ));

  CustomToggle.displayName = "CustomCategoryLink";

  return (
    <nav role="navigation" className="mega-menu navbar">
      <div
        className="collapse navbar-collapse mega-menu-fullwidth-collapse show"
        onMouseOut={() => dispatch()}
      >
        <ul className="nav navbar-nav">
          <Dropdown as="li" navbar={true}>
            <Dropdown.Toggle
              as={CustomToggle}
              className="dropdown-level-1"
              variant="success"
              id="item-toggle-1"
            >
              <Link
                onClick={() => {
                  if (state.show) dispatch();
                }}
                to="/category"
              >
                TEST
              </Link>
            </Dropdown.Toggle>
            <Dropdown.Menu
              show={state.show}
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

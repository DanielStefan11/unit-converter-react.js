import React from "react";
// Style
import "./Navbar.scss";
// React Router
import { NavLink, Link } from "react-router-dom";
// React Icons
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
// React Redux
import { connect } from "react-redux";
import { enableDarkMode } from "../../redux/darkMode/darkModeActions";
import { menuClicked } from "../../redux/burgerMenu/MenuActions";

function Navbar(props) {
  return (
    <nav>
      <div className="container nav-container">
        <div className="mobile-nav-container">
          <Link to="/" className="logo">
            <h3 className="logo">
              <span className="logo-1">Friendly</span>{" "}
              <span className="logo-2">Converter</span>
            </h3>
          </Link>

          <div
            className="menu-icon-container"
            onClick={() => props.menuClicked()}
          >
            {props.burgerMenuIcon ? (
              <MdClose className="menu-icon" />
            ) : (
              <HiOutlineMenu className="menu-icon" />
            )}
          </div>
        </div>

        <div className={props.burgerMenuIcon ? "nav-menu active" : "nav-menu"}>
          <NavLink
            to="/"
            activeStyle={{
              color: "#66d9ff",
              fontWeight: "bold",
            }}
            className="links"
            exact
          >
            Home
          </NavLink>

          <NavLink
            to="length-converter"
            activeStyle={{
              color: "#66d9ff",
              fontWeight: "bold",
            }}
            className="links"
          >
            Length
          </NavLink>

          <NavLink
            to="degrees-converter"
            activeStyle={{
              color: "#66d9ff",
              fontWeight: "bold",
            }}
            className="links"
          >
            Degrees
          </NavLink>

          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              checked={props.darkModeValue}
              onChange={(e) => {
                let checkedValue = e.target.checked;
                props.enableDarkMode(checkedValue);
              }}
            />
            <label htmlFor="checkbox" className="label">
              <FaSun className="sun-icon" />
              <FaMoon className="moon-icon" />
              <div className="ball"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    darkModeValue: state.darkModeFunction.darkMode,
    burgerMenuIcon: state.clickedMenu.clicked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enableDarkMode: (payload) => dispatch(enableDarkMode(payload)),
    menuClicked: () => dispatch(menuClicked()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

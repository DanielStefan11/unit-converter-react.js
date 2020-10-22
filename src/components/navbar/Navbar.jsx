import React, { Component } from "react";
// Style
import "./Navbar.scss";
// React Router
import { NavLink, Link } from "react-router-dom";
// React Icons
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
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
              onClick={() => this.handleClick()}
            >
              {this.state.clicked ? (
                <MdClose className="menu-icon" />
              ) : (
                <HiOutlineMenu className="menu-icon" />
              )}
            </div>
          </div>
          <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

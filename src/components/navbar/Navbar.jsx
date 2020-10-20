import React, { Component } from "react";
// Style
import "./Navbar.scss";
// React Router
import { NavLink } from "react-router-dom";
// React Icons
import { GrMenu, GrClose } from "react-icons/gr";

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
      <nav className="container">
        <div className="mobile-nav-container">
          <h3 className="logo">Friendly Converter</h3>
          <div className="menu-icon" onClick={() => this.handleClick()}>
            {this.state.clicked ? <GrClose /> : <GrMenu />}
          </div>
        </div>
        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="length-converter">Length Converter</NavLink>
          <NavLink to="degrees-converter">Degrees Converter</NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;

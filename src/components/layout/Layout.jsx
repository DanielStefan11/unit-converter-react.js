import React from "react";
// Components
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// Style
import "./Layout.scss";

// React Redux
import { connect } from "react-redux";

function Layout(props) {
  return (
    <div className={`layout ${props.darkModeValue && "dark-style"}`}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    darkModeValue: state.darkModeFunction.darkMode,
  };
}

export default connect(mapStateToProps)(Layout);

import React from "react";
// Components
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// Style
import "./Layout.scss";

export default function Layout(props) {
  return (
    <div className="layout">
      {/* <Header /> */}
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

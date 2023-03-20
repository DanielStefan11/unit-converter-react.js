import React from "react";
// Components
import Layout from "../../components/layout/Layout";
// Style
import "./Home.scss";
// React Icons
import { MdSwapVerticalCircle } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
// React Router
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className="home-page container">
        <h1>Welcome to Friendly Converter</h1>
        <h2>
          Choose from the menu the conversion you need and get the result in
          less than a second!
        </h2>
        <div className="cards-container">
          <Link to="/length-converter">
            <div className="link-card">
              <MdSwapVerticalCircle className="icon converter-icon" />
              <h5>Length Converter</h5>
            </div>
          </Link>
          <Link to="/degrees-converter">
            <div className="link-card">
              <FaTemperatureHigh className="icon termometer-icon" />
              <h5>Degrees Converter</h5>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

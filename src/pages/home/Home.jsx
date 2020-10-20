import React from "react";
// Components
import Layout from "../../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="home-page">
        <h1>Welcome to Friendly Converter</h1>
        <h2>
          Choose from the menu the conversion you need and get the result in few
          seconds!
        </h2>
      </div>
    </Layout>
  );
}

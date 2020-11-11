import React from "react";
// Components
import Layout from "../../components/layout/Layout";
import DegreesForm from "../../components/degreesConverterComponents/degreesForm/DegreesForm";
// Style
import "./DegreesConverter.scss";

export default function DegreesConverter() {
  return (
    <Layout>
      <div className="degrees-converter">
        <h1>Degrees Converter</h1>
        <DegreesForm />
      </div>
    </Layout>
  );
}

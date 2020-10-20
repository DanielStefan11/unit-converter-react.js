import React from "react";
// Components
import Layout from "../../components/layout/Layout";
import LengthForm from "../../components/lengthConverterComponents/lengthForm/LengthForm";
import ConversionBtns from "../../components/lengthConverterComponents/conversionBtns/ConversionBtns";

export default function LengthConverter() {
  return (
    <Layout>
      <div className="container">
        <h1>Length Converter</h1>
        <LengthForm />
        <ConversionBtns />
      </div>
    </Layout>
  );
}

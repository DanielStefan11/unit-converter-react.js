import React from "react";
// Components
import Layout from "../../components/layout/Layout";
import LengthForm from "../../components/lengthConverterComponents/lengthForm/LengthForm";
import ConversionBtns from "../../components/lengthConverterComponents/conversionBtns/ConversionBtns";
// Style
import "./LengthConverter.scss";

export default function LengthConverter() {
  return (
    <Layout>
      <div className="length-converter">
        <h1>Length Converter</h1>
        <LengthForm />
        <ConversionBtns />
        <p>* For decimal numbers, use "." not ",". </p>
      </div>
    </Layout>
  );
}

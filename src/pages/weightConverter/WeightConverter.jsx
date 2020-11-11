import React from "react";
// Components
import Layout from "../../components/layout/Layout";
import WeightForm from "../../components/weightConverterComponents/weightForm/WeightForm";
import WeightConversionBtns from "../../components/weightConverterComponents/weightConversionBtns/WeightConversionBtns";
// Style
import "./WeightConverter.scss";

export default function WeightConverter() {
  return (
    <Layout>
      <div className="weight-converter">
        <h1>Weight Converter</h1>
        <WeightForm />
        <WeightConversionBtns />
      </div>
    </Layout>
  );
}

import React from "react";
// Redux
import { connect } from "react-redux";
import {
  updateWeightOutput,
  updateWeight1,
  updateWeight2,
  resetWeight,
} from "../../../redux/weight/WeightActions";
// Style
import "./WeightConversionBtns.scss";
// React Icons
import { SiConvertio } from "react-icons/si";

function WeightConversionBtns(props) {
  return (
    <form>
      <div className="select-container">
        <select
          className={`${props.darkModeOn && "dark-mode-colors"}`}
          name="weight-1"
          onChange={(e) => {
            let weight_1_value = e.target.value;
            props.updateWeight1(weight_1_value);
          }}
        >
          <option value="default">From:</option>
          <option value="grams">Grams</option>
          <option value="pounds">Pounds</option>
          <option value="stones">Stones</option>
          <option value="kilograms">Kilograms</option>
          <option value="tons">Tons</option>
        </select>

        <select
          className={`${props.darkModeOn && "dark-mode-colors"}`}
          name="weight-2"
          onChange={(e) => {
            let weight_2_value = e.target.value;
            props.updateWeight2(weight_2_value);
          }}
        >
          <option value="default">To:</option>
          <option value="grams">Grams</option>
          <option value="pounds">Pounds</option>
          <option value="stones">Stones</option>
          <option value="kilograms">Kilograms</option>
          <option value="tons">Tons</option>
        </select>
      </div>

      <div className="btns-container">
        <button
          className={`weight-converter-btn ${
            props.darkModeOn && "dark-mode-convert-btn"
          }`}
          onClick={(e) => {
            e.preventDefault();
            props.updateWeightOutput();
          }}
        >
          <SiConvertio />
          Convert
        </button>
        <input type="reset" value="Reset" onClick={() => props.resetWeight()} />
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    darkModeOn: state.darkModeFunction.darkMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateWeight1: (payload) => dispatch(updateWeight1(payload)),
    updateWeight2: (payload) => dispatch(updateWeight2(payload)),
    updateWeightOutput: () => dispatch(updateWeightOutput()),
    resetWeight: () => dispatch(resetWeight()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeightConversionBtns);

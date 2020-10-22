import React from "react";
// React Redux
import { connect } from "react-redux";
import {
  updateDegreesInput,
  updateDegreesOutput,
  resetDegrees,
} from "../../../redux/degreesForm/DegreesFormActions";
// Style
import "./DegreesForm.scss";

function DegreesForm(props) {
  return (
    <form className="degrees-form">
      <div className="input-container">
        <input
          type="number"
          placeholder="Insert value to convert"
          value={props.degreesInputValue}
          onChange={(e) => {
            let valueForConverting = e.target.value;
            props.updateDegreesInput(valueForConverting);
          }}
        />
        <input
          type="text"
          placeholder="Output"
          value={props.degreesOutputValue}
          disabled
        />
      </div>

      <div className="btns-container">
        <select
          name="convert"
          onChange={(e) => {
            let convertingMode = e.target.value;
            props.updateDegreesOutput(convertingMode);
          }}
        >
          <option value="default">Choose how to convert</option>
          <option value="F-to-C">Fahrenheit to Celsius</option>
          <option value="C-to-F">Celsius to Fahrenheit</option>
        </select>
        <input
          type="reset"
          value="Reset"
          onClick={() => props.resetDegrees()}
        />
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    degreesInputValue: state.degreesForm.degreesInput,
    degreesOutputValue: state.degreesForm.degreesOutput,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateDegreesInput: (payload) => dispatch(updateDegreesInput(payload)),
    updateDegreesOutput: (payload) => dispatch(updateDegreesOutput(payload)),
    resetDegrees: () => dispatch(resetDegrees()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DegreesForm);

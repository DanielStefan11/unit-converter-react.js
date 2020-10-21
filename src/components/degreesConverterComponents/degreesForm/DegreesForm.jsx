import React from "react";
// React Redux
import { connect } from "react-redux";
import {
  updateDegreesInput,
  updateDegreesOutput,
  // fahrenheitToCelsius,
  resetDegrees,
} from "../../../redux/degreesForm/DegreesFormActions";

function DegreesForm(props) {
  return (
    <form>
      <div>
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
      <input type="reset" onClick={() => props.resetDegrees()} />
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

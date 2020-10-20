import React from "react";
// React Redux
import { connect } from "react-redux";
import {
  updateOutput,
  updateLength1,
  updateLength2,
  reset,
} from "../../../redux/form/FormActions";

function ConversionBtns(props) {
  return (
    <div>
      <form>
        <select
          name="length-1"
          onChange={(e) => {
            let valueOfLength1 = e.target.value;
            props.updateLength1(valueOfLength1);
          }}
        >
          <option value="reset">From:</option>
          <option value="mm">Milimeters</option>
          <option value="cm">Centimeters</option>
          <option value="inch">Inches</option>
          <option value="ft">Feet</option>
          <option value="yards">Yards</option>
          <option value="m">Meters</option>
          <option value="km">Kilometers</option>
          <option value="miles">Miles</option>
        </select>

        <select
          name="length-2"
          onChange={(e) => {
            let valueOfLength2 = e.target.value;
            props.updateLength2(valueOfLength2);
          }}
        >
          <option value="reset">To:</option>
          <option value="mm">Milimeters</option>
          <option value="cm">Centimeters</option>
          <option value="inch">Inches</option>
          <option value="ft">Feet</option>
          <option value="yards">Yards</option>
          <option value="m">Meters</option>
          <option value="km">Kilometers</option>
          <option value="miles">Miles</option>
        </select>

        <button
          onClick={(e) => {
            e.preventDefault();
            props.updateOutput();
          }}
        >
          Convert
        </button>

        <input type="reset" value="Reset" onClick={() => props.reset()} />
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    updateOutput: () => dispatch(updateOutput()),
    updateLength1: (payload) => dispatch(updateLength1(payload)),
    updateLength2: (payload) => dispatch(updateLength2(payload)),
    reset: () => dispatch(reset()),
  };
}

export default connect(null, mapDispatchToProps)(ConversionBtns);

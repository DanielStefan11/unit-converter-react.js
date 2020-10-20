import React from "react";
// React Redux
import { connect } from "react-redux";
import { updateInput } from "../../../redux/form/FormActions";

function LengthForm(props) {
  return (
    <form>
      <div>
        <label>Input Value</label>
        <input
          type="number"
          value={props.inputValue}
          onChange={(e) => {
            let valueToConvert = e.target.value;
            props.updateInput(valueToConvert);
          }}
        />
      </div>

      <div>
        <label>Output</label>
        <input type="text" value={props.outputValue} disabled />
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    inputValue: state.form.input,
    outputValue: state.form.output,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateInput: (payload) => dispatch(updateInput(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LengthForm);

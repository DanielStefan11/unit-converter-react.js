import React from "react";
// React Redux
import { connect } from "react-redux";
import { updateInput } from "../../../redux/lengthForm/FormActions";
// Style
import "./LengthForm.scss";

function LengthForm(props) {
  return (
    <form className="length-form">
      <input
        type="number"
        className={`${props.darkModeOn && "dark-mode-colors"}`}
        value={props.inputValue}
        placeholder="Input Value"
        onChange={(e) => {
          let valueToConvert = e.target.value;
          props.updateInput(valueToConvert);
        }}
      />

      <input
        type="text"
        value={props.outputValue}
        placeholder="Output Value"
        disabled
      />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    inputValue: state.form.input,
    outputValue: state.form.output,
    darkModeOn: state.darkModeFunction.darkMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateInput: (payload) => dispatch(updateInput(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LengthForm);

import React from "react";
// Redux
import { connect } from "react-redux";
import { updateWeightInput } from "../../../redux/weight/WeightActions";
// Style
import "./WeightForm.scss";

function WeightForm(props) {
  return (
    <form className="weight-form">
      <input
        type="number"
        className={`${props.darkModeOn && "dark-mode-colors"}`}
        placeholder="Input Value..."
        value={props.weightInputValue}
        onChange={(e) => {
          let weightValueToConvert = e.target.value;
          props.updateWeightInput(weightValueToConvert);
        }}
      />
      <input
        type="text"
        placeholder="Output Value..."
        value={props.weightOutputValue}
        disabled
      />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    weightInputValue: state.weight.weightInput,
    weightOutputValue: state.weight.weightOutput,
    darkModeOn: state.darkModeFunction.darkMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateWeightInput: (payload) => dispatch(updateWeightInput(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightForm);

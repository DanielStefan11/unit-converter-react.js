import React from "react";
// Redux
import { connect } from "react-redux";
import { updateWeightInput } from "../../../redux/weight/WeightActions";
import { showAndRemoveCopiedMessage } from "../../../redux/copyToClipboard/copyToClipboardActions";
// Style
import "./WeightForm.scss";
// Copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

function WeightForm(props) {
  return (
    <div>
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
      <div className="copy-btn-container">
        {props.copiedText && (
          <span
            className={`${
              props.darkModeOn ? "dark-mode-span" : "light-mode-span"
            }`}
          >
            Value Copied
          </span>
        )}

        <CopyToClipboard
          text={props.weightOutputValue}
          onCopy={() => {
            props.showAndRemoveCopiedMessage();
          }}
        >
          <button className={`copy-btn ${props.darkModeOn && "dark-mode-btn"}`}>
            Copy to clipboard
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    weightInputValue: state.weight.weightInput,
    weightOutputValue: state.weight.weightOutput,
    darkModeOn: state.darkModeFunction.darkMode,
    copiedText: state.textCopied.copied,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateWeightInput: (payload) => dispatch(updateWeightInput(payload)),
    showAndRemoveCopiedMessage: () => dispatch(showAndRemoveCopiedMessage()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightForm);

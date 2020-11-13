import React from "react";
// React Redux
import { connect } from "react-redux";
import {
  updateDegreesInput,
  updateDegreesOutput,
  resetDegrees,
} from "../../../redux/degreesForm/DegreesFormActions";
import { showAndRemoveCopiedMessage } from "../../../redux/copyToClipboard/copyToClipboardActions";
// Style
import "./DegreesForm.scss";
// Copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

function DegreesForm(props) {
  return (
    <div>
      <form className="degrees-form">
        <div className="input-container">
          <input
            type="number"
            className={`${props.darkModeOn && "dark-mode-colors"}`}
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
            className={`${props.darkModeOn && "dark-mode-colors"}`}
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
            className={`degrees-reset-btn ${
              props.darkModeOn && "dark-mode-degrees-reset-btn"
            }`}
            type="reset"
            value="Reset"
            onClick={() => props.resetDegrees()}
          />
        </div>
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
          text={props.degreesOutputValue}
          onCopy={() => {
            props.showAndRemoveCopiedMessage();
          }}
        >
          <p className={`copy-btn ${props.darkModeOn && "dark-mode-btn"}`}>
            Copy to clipboard
          </p>
        </CopyToClipboard>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    degreesInputValue: state.degreesForm.degreesInput,
    degreesOutputValue: state.degreesForm.degreesOutput,
    darkModeOn: state.darkModeFunction.darkMode,
    copiedText: state.textCopied.copied,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateDegreesInput: (payload) => dispatch(updateDegreesInput(payload)),
    updateDegreesOutput: (payload) => dispatch(updateDegreesOutput(payload)),
    resetDegrees: () => dispatch(resetDegrees()),
    showAndRemoveCopiedMessage: () => dispatch(showAndRemoveCopiedMessage()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DegreesForm);

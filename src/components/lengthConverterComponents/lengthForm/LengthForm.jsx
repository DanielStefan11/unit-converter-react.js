import React from "react";
// React Redux
import { connect } from "react-redux";
import { updateInput } from "../../../redux/lengthForm/FormActions";
import { showAndRemoveCopiedMessage } from "../../../redux/copyToClipboard/copyToClipboardActions";
// Style
import "./LengthForm.scss";
// Copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

function LengthForm(props) {
  return (
    <div>
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
    inputValue: state.form.input,
    outputValue: state.form.output,
    darkModeOn: state.darkModeFunction.darkMode,
    copiedText: state.textCopied.copied,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateInput: (payload) => dispatch(updateInput(payload)),
    showAndRemoveCopiedMessage: () => dispatch(showAndRemoveCopiedMessage()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LengthForm);

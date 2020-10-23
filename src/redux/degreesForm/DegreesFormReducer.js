import {
  UPDATE_DEGREES_INPUT,
  UPDATE_DEGREES_OUTPUT,
  RESET_DEGREES,
} from "./DegreesFormConstants";

const initialState = {
  degreesInput: "",
  degreesOutput: "",
};

export function degreesFormReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DEGREES_INPUT:
      return {
        ...state,
        degreesInput: action.payload,
      };

    case UPDATE_DEGREES_OUTPUT:
      let valueToConvert;
      if (action.payload === "F-to-C") {
        valueToConvert = (state.degreesInput - 32) / 1.8;
        return {
          ...state,
          degreesOutput: valueToConvert + " \u2103 (from \u2109)",
        };
      } else if (action.payload === "C-to-F") {
        valueToConvert = state.degreesInput * 1.8 + 32;
        return {
          ...state,
          degreesOutput: valueToConvert + " \u2109 (from \u2103)",
        };
      } else {
        return state;
      }

    case RESET_DEGREES:
      return initialState;

    default:
      return state;
  }
}

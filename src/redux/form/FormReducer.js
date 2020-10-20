import {
  UPDATE_INPUT,
  UPDATE_OUTPUT,
  UPDATE_LENGTH_1,
  UPDATE_LENGTH_2,
  RESET,
} from "./FormConstants";

const initialState = {
  input: "",
  output: "",
  length1: "",
  length2: "",
};

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    case UPDATE_LENGTH_1:
      return {
        ...state,
        length1: action.payload,
      };

    case UPDATE_LENGTH_2:
      return {
        ...state,
        length2: action.payload,
      };

    case UPDATE_OUTPUT:
      let convertedValue;
      if (state.length1 === "mm" && state.length2 === "mm") {
        convertedValue = state.input;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "cm") {
        convertedValue = state.input * 0.1;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "inch") {
        convertedValue = state.input * 0.0393700787;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "yards") {
        convertedValue = state.input * 0.0010936133;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "m") {
        convertedValue = state.input * 0.001;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "km") {
        convertedValue = state.input * 0.000001;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "miles") {
        convertedValue = state.input * 0.00000062137;
        return {
          ...state,
          output: convertedValue,
        };
      } else {
        return state;
      }

    case RESET:
      return initialState;

    default:
      return state;
  }
}

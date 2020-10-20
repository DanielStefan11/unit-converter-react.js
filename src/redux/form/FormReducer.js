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
      // Milimeters To:
      if (state.length1 === "mm" && state.length2 === "mm") {
        convertedValue = state.input + " mm (from mm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "cm") {
        convertedValue = state.input * 0.1 + " cm (from mm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "inch") {
        convertedValue = state.input * 0.0393700787 + " inch (from mm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "ft") {
        convertedValue = state.input * 0.0032808 + " ft. (from mm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "yards") {
        convertedValue = state.input * 0.0010936133 + " yd (from mm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "m") {
        convertedValue = state.input * 0.001 + " m (from mm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "km") {
        convertedValue = state.input * 0.000001 + " km from (mm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "miles") {
        convertedValue = state.input * 0.00000062137 + " mil. (from mm)";
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Centimeters To:
      else if (state.length1 === "cm" && state.length2 === "mm") {
        convertedValue = state.input / 0.1 + " mm (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "cm") {
        convertedValue = state.input + " cm (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "inch") {
        convertedValue = state.input * 0.3937 + " inch (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "ft") {
        convertedValue = state.input * 0.032808 + " ft. (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "yards") {
        convertedValue = state.input * 0.010936 + " yd. (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "m") {
        convertedValue = state.input / 100 + " m (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "km") {
        convertedValue = state.input / 100000 + " km (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "miles") {
        convertedValue = state.input * 0.0000062137 + " mil. (from cm)";
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Inches to:
      else if (state.length1 === "inch" && state.length2 === "mm") {
        convertedValue = state.input / 0.03937 + " mm (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "cm") {
        convertedValue = state.input / 0.3937 + " cm (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "inch") {
        convertedValue = state.input + " inch (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "ft") {
        convertedValue = state.input * 0.083333 + " ft. (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "yards") {
        convertedValue = state.input * 0.027778 + " yd. (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "m") {
        convertedValue = state.input / 39.37 + " m (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "km") {
        convertedValue = state.input / 39370 + " km (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "miles") {
        convertedValue = state.input * 0.000015783 + " mil. (from inch)";
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Feet To:
      else if (state.length1 === "ft" && state.length2 === "mm") {
        convertedValue = state.input / 0.0032808 + " mm (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "cm") {
        convertedValue = state.input / 0.032808 + " cm (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "inch") {
        convertedValue = state.input * 12 + " inch (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "ft") {
        convertedValue = state.input + " ft. (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "yards") {
        convertedValue = state.input * 0.33333 + " yd. (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "m") {
        convertedValue = state.input / 3.2808 + " m (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "km") {
        convertedValue = state.input / 3280.8 + " km (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "miles") {
        convertedValue = state.input * 0.00018939 + " mil. (from ft.)";
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Yards To:
      else if (state.length1 === "yards" && state.length2 === "mm") {
        convertedValue = state.input / 0.0010936 + " mm (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "cm") {
        convertedValue = state.input / 0.010936 + " cm (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "inch") {
        convertedValue = state.input * 36 + " inch (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "ft") {
        convertedValue = state.input * 3 + " ft. (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "yards") {
        convertedValue = state.input + " yd. (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "m") {
        convertedValue = state.input / 1.0936 + " m (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "km") {
        convertedValue = state.input / 1093.6 + " km (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "miles") {
        convertedValue = state.input * 0.00056818 + " mil. (from yd.)";
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Meters To:
      else if (state.length1 === "m" && state.length2 === "mm") {
        convertedValue = state.input / 0.001 + " mm (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "cm") {
        convertedValue = state.input / 0.01 + " cm (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "inch") {
        convertedValue = state.input * 39.37 + " inch (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "ft") {
        convertedValue = state.input * 3.2808 + " ft. (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "yards") {
        convertedValue = state.input * 1.0936 + " yd. (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "m") {
        convertedValue = state.input + " m (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "km") {
        convertedValue = state.input / 1000 + " km (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "miles") {
        convertedValue = state.input * 0.00062137 + " mil. (from m)";
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Kilometers To:
      else if (state.length1 === "km" && state.length2 === "mm") {
        convertedValue = state.input / 0.000001 + " mm (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "cm") {
        convertedValue = state.input * 100000 + " cm (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "inch") {
        convertedValue = state.input * 39370 + " inch (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "ft") {
        convertedValue = state.input * 3280.8 + " ft. (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "yards") {
        convertedValue = state.input * 1093.6 + " yd. (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "m") {
        convertedValue = state.input * 1000 + " m (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "km") {
        convertedValue = state.input + " km (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "miles") {
        convertedValue = state.input * 0.62137 + " mil. (from km)";
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Miles To:
      else if (state.length1 === "miles" && state.length2 === "mm") {
        convertedValue = state.input * 0.00000062137 + " mm (from mil.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "cm") {
        convertedValue = state.input / 0.0000062137 + " cm (from mil.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "inch") {
        convertedValue = state.input * 63360 + " inch (from mil.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "ft") {
        convertedValue = state.input * 5280 + " ft. (from mil.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "yards") {
        convertedValue = state.input * 1760 + " yd. (from mil.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "m") {
        convertedValue = state.input / 0.00062137 + " m (from mil.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "km") {
        convertedValue = state.input / 0.62137 + " km (from mil.)";
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "miles") {
        convertedValue = state.input + " mil. (from mil.)";
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

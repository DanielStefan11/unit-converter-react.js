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
      const milimeters = " mm",
        centimeters = " cm",
        inches = " inch",
        feet = " ft.",
        yards = " yd.",
        meters = " m",
        kilometers = " km",
        miles = " mil.";

      // Milimeters To:
      if (state.length1 === "mm" && state.length2 === "mm") {
        convertedValue = state.input + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "cm") {
        convertedValue = state.input * 0.1 + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "inch") {
        convertedValue = state.input * 0.0393700787 + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "ft") {
        convertedValue = state.input * 0.0032808 + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "yards") {
        convertedValue = state.input * 0.0010936133 + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "m") {
        convertedValue = state.input * 0.001 + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "km") {
        convertedValue = state.input * 0.000001 + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "mm" && state.length2 === "miles") {
        convertedValue = state.input * 0.00000062137 + miles;
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Centimeters To:
      else if (state.length1 === "cm" && state.length2 === "mm") {
        convertedValue = state.input / 0.1 + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "cm") {
        convertedValue = state.input + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "inch") {
        convertedValue = state.input * 0.3937 + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "ft") {
        convertedValue = state.input * 0.032808 + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "yards") {
        convertedValue = state.input * 0.010936 + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "m") {
        convertedValue = state.input / 100 + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "km") {
        convertedValue = state.input / 100000 + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "cm" && state.length2 === "miles") {
        convertedValue = state.input * 0.0000062137 + miles;
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Inches to:
      else if (state.length1 === "inch" && state.length2 === "mm") {
        convertedValue = state.input / 0.03937 + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "cm") {
        convertedValue = state.input / 0.3937 + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "inch") {
        convertedValue = state.input + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "ft") {
        convertedValue = state.input * 0.083333 + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "yards") {
        convertedValue = state.input * 0.027778 + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "m") {
        convertedValue = state.input / 39.37 + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "km") {
        convertedValue = state.input / 39370 + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "inch" && state.length2 === "miles") {
        convertedValue = state.input * 0.000015783 + miles;
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Feet To:
      else if (state.length1 === "ft" && state.length2 === "mm") {
        convertedValue = state.input / 0.0032808 + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "cm") {
        convertedValue = state.input / 0.032808 + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "inch") {
        convertedValue = state.input * 12 + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "ft") {
        convertedValue = state.input + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "yards") {
        convertedValue = state.input * 0.33333 + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "m") {
        convertedValue = state.input / 3.2808 + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "km") {
        convertedValue = state.input / 3280.8 + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "ft" && state.length2 === "miles") {
        convertedValue = state.input * 0.00018939 + miles;
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Yards To:
      else if (state.length1 === "yards" && state.length2 === "mm") {
        convertedValue = state.input / 0.0010936 + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "cm") {
        convertedValue = state.input / 0.010936 + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "inch") {
        convertedValue = state.input * 36 + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "ft") {
        convertedValue = state.input * 3 + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "yards") {
        convertedValue = state.input + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "m") {
        convertedValue = state.input / 1.0936 + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "km") {
        convertedValue = state.input / 1093.6 + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "yards" && state.length2 === "miles") {
        convertedValue = state.input * 0.00056818 + miles;
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Meters To:
      else if (state.length1 === "m" && state.length2 === "mm") {
        convertedValue = state.input / 0.001 + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "cm") {
        convertedValue = state.input / 0.01 + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "inch") {
        convertedValue = state.input * 39.37 + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "ft") {
        convertedValue = state.input * 3.2808 + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "yards") {
        convertedValue = state.input * 1.0936 + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "m") {
        convertedValue = state.input + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "km") {
        convertedValue = state.input / 1000 + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "m" && state.length2 === "miles") {
        convertedValue = state.input * 0.00062137 + miles;
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Kilometers To:
      else if (state.length1 === "km" && state.length2 === "mm") {
        convertedValue = state.input / 0.000001 + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "cm") {
        convertedValue = state.input * 100000 + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "inch") {
        convertedValue = state.input * 39370 + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "ft") {
        convertedValue = state.input * 3280.8 + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "yards") {
        convertedValue = state.input * 1093.6 + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "m") {
        convertedValue = state.input * 1000 + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "km") {
        convertedValue = state.input + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "km" && state.length2 === "miles") {
        convertedValue = state.input * 0.62137 + miles;
        return {
          ...state,
          output: convertedValue,
        };
      }

      // Miles To:
      else if (state.length1 === "miles" && state.length2 === "mm") {
        convertedValue = state.input * 0.00000062137 + milimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "cm") {
        convertedValue = state.input / 0.0000062137 + centimeters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "inch") {
        convertedValue = state.input * 63360 + inches;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "ft") {
        convertedValue = state.input * 5280 + feet;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "yards") {
        convertedValue = state.input * 1760 + yards;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "m") {
        convertedValue = state.input / 0.00062137 + meters;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "km") {
        convertedValue = state.input / 0.62137 + kilometers;
        return {
          ...state,
          output: convertedValue,
        };
      } else if (state.length1 === "miles" && state.length2 === "miles") {
        convertedValue = state.input + miles;
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

import {
  UPDATE_WEIGHT_INPUT,
  UPDATE_WEIGHT_OUTPUT,
  UPDATE_WEIGHT_1,
  UPDATE_WEIGHT_2,
  RESET_WEIGHT,
} from "../actionConstants";

const initialState = {
  weightInput: "",
  weightOutput: "",
  weight1: "",
  weight2: "",
};

export function WeightReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WEIGHT_INPUT:
      return {
        ...state,
        weightInput: action.payload,
      };

    case UPDATE_WEIGHT_OUTPUT:
      let convertedWeightValue;
      const grams = " grams",
        pounds = " pounds",
        stones = " stones",
        kilograms = " kilograms",
        tons = " tons";

      // Convert Grams To:
      if (state.weight1 === "grams" && state.weight2 === "grams") {
        convertedWeightValue = state.weightInput + grams;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "grams" && state.weight2 === "pounds") {
        convertedWeightValue = state.weightInput * 0.0022046 + pounds;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "grams" && state.weight2 === "stones") {
        convertedWeightValue = state.weightInput * 0.00015747 + stones;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "grams" && state.weight2 === "kilograms") {
        convertedWeightValue = state.weightInput / 1000 + kilograms;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "grams" && state.weight2 === "tons") {
        convertedWeightValue = state.weightInput / 1000000 + tons;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      }

      // Convert Pounds to:
      else if (state.weight1 === "pounds" && state.weight2 === "grams") {
        convertedWeightValue = state.weightInput / 0.0022046 + grams;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "pounds" && state.weight2 === "pounds") {
        convertedWeightValue = state.weightInput + pounds;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "pounds" && state.weight2 === "stones") {
        convertedWeightValue = state.weightInput * 0.071429 + stones;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "pounds" && state.weight2 === "kilograms") {
        convertedWeightValue = state.weightInput / 2.2046 + kilograms;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "pounds" && state.weight2 === "tones") {
        convertedWeightValue = state.weightInput / 2000 + tons;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      }

      // Convert Stones To:
      else if (state.weight1 === "stones" && state.weight2 === "grams") {
        convertedWeightValue = state.weightInput / 0.00015747 + grams;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "stones" && state.weight2 === "pounds") {
        convertedWeightValue = state.weightInput * 14000 + pounds;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "stones" && state.weight2 === "stones") {
        convertedWeightValue = state.weightInput + stones;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "stones" && state.weight2 === "kilograms") {
        convertedWeightValue = state.weightInput / 0.15747 + kilograms;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "stones" && state.weight2 === "tons") {
        convertedWeightValue = state.weightInput / 157.47 + tons;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      }

      // Convert Kilograms To:
      else if (state.weight1 === "kilograms" && state.weight2 === "grams") {
        convertedWeightValue = state.weightInput / 0.001 + grams;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "kilograms" && state.weight2 === "pounds") {
        convertedWeightValue = state.weightInput * 2.2046 + pounds;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "kilograms" && state.weight2 === "stones") {
        convertedWeightValue = state.weightInput * 0.15747 + stones;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (
        state.weight1 === "kilograms" &&
        state.weight2 === "kilograms"
      ) {
        convertedWeightValue = state.weightInput + kilograms;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "kilograms" && state.weight2 === "tons") {
        convertedWeightValue = state.weightInput / 1000 + tons;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      }

      // Convert Tons To:
      else if (state.weight1 === "tons" && state.weight2 === "grams") {
        convertedWeightValue = state.weightInput / 0.000001 + grams;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "tons" && state.weight2 === "pounds") {
        convertedWeightValue = state.weightInput * 2000 + pounds;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "tons" && state.weight2 === "stones") {
        convertedWeightValue = state.weightInput * 142.86 + stones;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      } else if (state.weight1 === "tons" && state.weight2 === "kilograms") {
        convertedWeightValue = state.weightInput / 0.001 + kilograms;
        return {
          ...state,
          weightOutput: convertedWeightValue,
        };
      }
      break;

    case UPDATE_WEIGHT_1:
      return {
        ...state,
        weight1: action.payload,
      };

    case UPDATE_WEIGHT_2:
      return {
        ...state,
        weight2: action.payload,
      };

    case RESET_WEIGHT:
      return initialState;

    default:
      return state;
  }
}

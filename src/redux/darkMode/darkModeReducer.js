import { ENABLE_DARK_MODE } from "../actionConstants";

const initialState = {
  darkMode: false,
};

export function darkModeReducer(state = initialState, action) {
  switch (action.type) {
    case ENABLE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };

    default:
      return state;
  }
}

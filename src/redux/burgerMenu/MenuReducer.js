import { BUGER_ICON_CLICKED } from "../actionConstants";

const initialState = {
  clicked: false,
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case BUGER_ICON_CLICKED:
      return {
        ...state,
        clicked: !state.clicked,
      };

    default:
      return state;
  }
}

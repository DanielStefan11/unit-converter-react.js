import { SHOW_COPIED_MESSAGE, REMOVE_COPIED_MESSAGE } from "../actionConstants";

const initialState = {
  copied: false,
};

export function copyToClipboardReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_COPIED_MESSAGE:
      return {
        ...state,
        copied: !state.copied,
      };

    case REMOVE_COPIED_MESSAGE:
      return initialState;

    default:
      return state;
  }
}

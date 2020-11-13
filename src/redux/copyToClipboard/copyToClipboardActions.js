import { SHOW_COPIED_MESSAGE, REMOVE_COPIED_MESSAGE } from "../actionConstants";

export function copiedToClipboard() {
  return {
    type: SHOW_COPIED_MESSAGE,
  };
}

export function removeCopiedMessage() {
  return {
    type: REMOVE_COPIED_MESSAGE,
  };
}

export function showAndRemoveCopiedMessage() {
  return (dispatch) => {
    dispatch(copiedToClipboard());

    setTimeout(() => dispatch(removeCopiedMessage()), 2000);
  };
}

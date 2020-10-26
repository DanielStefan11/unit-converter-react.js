import { ENABLE_DARK_MODE } from "../actionConstants";

export function enableDarkMode(payload) {
  return {
    type: ENABLE_DARK_MODE,
    payload,
  };
}

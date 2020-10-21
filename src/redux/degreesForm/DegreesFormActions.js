import {
  UPDATE_DEGREES_INPUT,
  UPDATE_DEGREES_OUTPUT,
  RESET_DEGREES,
} from "./DegreesFormConstants";

export function updateDegreesInput(payload) {
  return {
    type: UPDATE_DEGREES_INPUT,
    payload,
  };
}

export function updateDegreesOutput(payload) {
  return {
    type: UPDATE_DEGREES_OUTPUT,
    payload,
  };
}

export function resetDegrees() {
  return {
    type: RESET_DEGREES,
  };
}

import {
  UPDATE_INPUT,
  UPDATE_OUTPUT,
  UPDATE_LENGTH_1,
  UPDATE_LENGTH_2,
  RESET,
} from "../actionConstants";

export function updateInput(payload) {
  return {
    type: UPDATE_INPUT,
    payload,
  };
}

export function updateOutput() {
  return {
    type: UPDATE_OUTPUT,
  };
}

export function updateLength1(payload) {
  return {
    type: UPDATE_LENGTH_1,
    payload,
  };
}
export function updateLength2(payload) {
  return {
    type: UPDATE_LENGTH_2,
    payload,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

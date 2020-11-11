import {
  UPDATE_WEIGHT_INPUT,
  UPDATE_WEIGHT_OUTPUT,
  UPDATE_WEIGHT_1,
  UPDATE_WEIGHT_2,
  RESET_WEIGHT,
} from "../actionConstants";

export function updateWeightInput(payload) {
  return {
    type: UPDATE_WEIGHT_INPUT,
    payload,
  };
}

export function updateWeightOutput() {
  return {
    type: UPDATE_WEIGHT_OUTPUT,
  };
}

export function updateWeight1(payload) {
  return {
    type: UPDATE_WEIGHT_1,
    payload,
  };
}

export function updateWeight2(payload) {
  return {
    type: UPDATE_WEIGHT_2,
    payload,
  };
}

export function resetWeight() {
  return {
    type: RESET_WEIGHT,
  };
}

import { createStore, combineReducers } from "redux";
// Reducers
import { formReducer } from "./lengthForm/FormReducer";
import { degreesFormReducer } from "./degreesForm/DegreesFormReducer";

const rootReducer = combineReducers({
  form: formReducer,
  degreesForm: degreesFormReducer,
});

const store = createStore(rootReducer);

export default store;

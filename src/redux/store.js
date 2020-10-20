import { createStore, combineReducers } from "redux";
// Reducers
import { formReducer } from "../redux/form/FormReducer";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;

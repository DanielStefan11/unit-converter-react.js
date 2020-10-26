import { createStore, combineReducers } from "redux";
// Reducers
import { formReducer } from "./lengthForm/FormReducer";
import { degreesFormReducer } from "./degreesForm/DegreesFormReducer";
import { darkModeReducer } from "./darkMode/darkModeReducer";
import { menuReducer } from "./burgerMenu/MenuReducer";

const rootReducer = combineReducers({
  form: formReducer,
  degreesForm: degreesFormReducer,
  darkModeFunction: darkModeReducer,
  clickedMenu: menuReducer,
});

const store = createStore(rootReducer);

export default store;

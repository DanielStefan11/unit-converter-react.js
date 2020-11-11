import { createStore, combineReducers } from "redux";
// Reducers
import { formReducer } from "./lengthForm/FormReducer";
import { degreesFormReducer } from "./degreesForm/DegreesFormReducer";
import { darkModeReducer } from "./darkMode/darkModeReducer";
import { menuReducer } from "./burgerMenu/MenuReducer";
import { WeightReducer } from "./weight/WeightReducer";

const rootReducer = combineReducers({
  form: formReducer,
  degreesForm: degreesFormReducer,
  darkModeFunction: darkModeReducer,
  clickedMenu: menuReducer,
  weight: WeightReducer,
});

const store = createStore(rootReducer);

export default store;

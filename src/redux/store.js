import { createStore, combineReducers, applyMiddleware } from "redux";
// Reducers
import { formReducer } from "./lengthForm/FormReducer";
import { degreesFormReducer } from "./degreesForm/DegreesFormReducer";
import { darkModeReducer } from "./darkMode/darkModeReducer";
import { menuReducer } from "./burgerMenu/MenuReducer";
import { WeightReducer } from "./weight/WeightReducer";
import { copyToClipboardReducer } from "./copyToClipboard/copyToClipboardReducer";
// Redux Thunk
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  form: formReducer,
  degreesForm: degreesFormReducer,
  darkModeFunction: darkModeReducer,
  clickedMenu: menuReducer,
  weight: WeightReducer,
  textCopied: copyToClipboardReducer,
});

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

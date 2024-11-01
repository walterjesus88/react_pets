// rootReducer.js
import { combineReducers } from "redux";
import snippetReducer from "./snippetReducer";
// Aquí puedes agregar más reductores si tienes otros en tu aplicación.

const rootReducer = combineReducers({
  snippets: snippetReducer,
  // Agrega otros reductores aquí si los tienes, por ejemplo:
  // otherReducer: otherReducer
});

export default rootReducer;

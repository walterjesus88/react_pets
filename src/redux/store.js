// /redux/store.js
// import { createStore } from 'redux';
// import todoReducer from './todoSlice';
// import userReducer from './userReducer';
// import snippetReducer from './snippetReducer';

// const store = createStore(snippetReducer);

// export default store;



// src/redux/store.js
// import { createStore, applyMiddleware } from "redux";
// import {thunk} from "redux-thunk";
// import snippetReducer from "./snippetReducer";



// const store = createStore(snippetReducer, applyMiddleware(thunk));

// export default store;


// store.js
// import { createStore, applyMiddleware } from "redux";
// import {thunk} from "redux-thunk"; // Importación sin llaves
// import rootReducer from "./rootReducer"; // Importa el rootReducer


// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk'; // Middleware thunk para acciones asincrónicas
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Habilita DevTools y middleware
);

export default store;



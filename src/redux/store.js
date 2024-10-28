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
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; // Importación sin llaves
import rootReducer from "./rootReducer"; // Importa el rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

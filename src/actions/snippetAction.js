 // Action creators
//  export const addSnippet = (text) => ({
//     type: 'ADD_SNIPPET',
//     payload: { id: Date.now(), text, completed: false },
//   });
  
  // export const toggleSnippet = (id) => ({
  //   type: 'TOGGLE_SNIPPET',
  //   payload: id,
  // });
  
  // export const deleteSnippet = (id) => ({
  //   type: 'DELETE_SNIPPET',
  //   payload: id,
  // });
  

  // src/redux/actions.js
  // export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
// export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
// export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

// export const addTodoRequest = () => ({ type: ADD_TODO_REQUEST });
// export const addTodoSuccess = (todo) => ({ type: ADD_TODO_SUCCESS, payload: todo });
// export const addTodoFailure = (error) => ({ type: ADD_TODO_FAILURE, payload: error });


import { fetchToken } from "../services/authService";
import { getSnippets,postSnippets, getSnippetId } from '../services/apiService';
import { REQUEST, SUCCESS, FAILURE, ADD_SNIPPET, FETCH_SNIPPETS, FETCH_SNIPPET_DETAIL } from "./snippetActionTypes";



export const actionCreator = (baseType) => ({
  request:()=>({type: `${baseType}_${REQUEST}`}),
  success:(payload)=>({type: `${baseType}_${SUCCESS}`, payload}),
  failure:(error)=>({type: `${baseType}_${FAILURE}`, error}),
});


const fectchSnippetdetailActions = actionCreator(FETCH_SNIPPET_DETAIL);
const fectchSnippetActions = actionCreator(FETCH_SNIPPETS);
const addSnippetActions = actionCreator(ADD_SNIPPET);


// Acción asincrónica que envía el POST a la API y actualiza el estado en Redux

export const getToken = (username, password) => {
  return async (dispatch) => {
    //dispatch(addTodoRequest());
    try {      
      const token = await fetchToken(username, password);  

      console.log(token)    
      localStorage.setItem('authToken', token);

    } catch (error) {
      console.error("Error al obtener el token: ", error.message);
    } 
  };   
};   
  

export const fetchSnippets = () => {
  return async (dispatch) => {
    dispatch(fectchSnippetActions.request());
    try {      

      const snippets = await getSnippets();
      console.log(snippets)

      dispatch(fectchSnippetActions.success(snippets.snippets)); 

    } catch (error) {
      dispatch(fectchSnippetActions.failure(error));
      console.error("Error al obtener los snippets: ", error.message);
    } 
  };   
};   
  
export const getSnippetDetail  = (id) => {
  return async (dispatch) => {
    dispatch(fectchSnippetdetailActions.request());
    try {      

      const snippet = await getSnippetId(id);
      console.log(snippet)

      dispatch(fectchSnippetdetailActions.success(snippet)); 

    } catch (error) {
      dispatch(fectchSnippetdetailActions.failure(error));
      console.error("Error al obtener los snippets: ", error.message);
    } 
  };   
};   

export const addSnippet = (snippet) => {
  return async (dispatch) => {
    dispatch(addSnippetActions.request());
    try {

      //const token = localStorage.getItem("authToken");

      // const snippetResponse  = await fetch("http://localhost:8000/api/snippets/", {
      //   method: "POST",
      //   headers: { 
      //     "Authorization": `Bearer ${token}`,
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(snippet),
      // });
      
      const snippetResponse = await postSnippets(snippet);

      console.log(snippetResponse)

      if (!snippetResponse) throw new Error('Error al crear el snippet');

      //const snippetData  = await snippetResponse.json();

      dispatch(addSnippetActions.success(snippetResponse)); // Actualiza el estado con la tarea nueva
    } catch (error) {
      dispatch(addSnippetActions.failure(error.message));
    }
  };
};

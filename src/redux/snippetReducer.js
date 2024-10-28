// const initialState = {
//     snippets: [],
// };

// const snippetReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_SNIPPET': {
//             return {
//                 ...state,
//                 snippets: [...state.snippets, action.payload],
//             };                                                                                              
//         }                                                                                                  
//         case 'TOGGLE_SNIPPET': {
//             return {
//                 ...state,
//                 snippets: state.snippets.map((snippet) =>
//                     snippet.id === action.payload
//                         ? { ...snippet, completed: !snippet.completed }
//                         : snippet
//                 ),
//             };
//         }
//         case 'DELETE_SNIPPET': {
//             return {
//                 ...state,
//                 snippets: state.snippets.filter(
//                     (snippet) => snippet.id !== action.payload
//                 ),
//             };
//         }
//         default:
//             return state;
//     }       
// };

// export default snippetReducer;


// src/redux/reducers.js
//import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from "../actions/snippetAction";
import { REQUEST, SUCCESS, FAILURE, ADD_SNIPPET, FETCH_SNIPPETS, FETCH_SNIPPET_DETAIL } from "../actions/snippetActionTypes";

const initialState = {
  snippets: [],
  snippetDetail: null,
  loading: false,
  error: null,
};

const snippetReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_SNIPPET}_${REQUEST}`:
    case `${FETCH_SNIPPETS}_${REQUEST}`:
    case `${FETCH_SNIPPET_DETAIL}_${REQUEST}`:
      return { ...state, loading: true, error: null };

    case `${ADD_SNIPPET}_${SUCCESS}`:
        return { ...state, loading: false, snippets: [...state.snippets, action.payload] };

    case `${FETCH_SNIPPETS}_${SUCCESS}`:
      return { ...state, loading: false, snippets: action.payload, snippetDetail: action.payload };

    case `${FETCH_SNIPPET_DETAIL}_${SUCCESS}`:
        return { ...state, loading: false, snippetDetail: action.payload };
  
    case `${ADD_SNIPPET}_${FAILURE}`:   
    case `${FETCH_SNIPPETS}_${FAILURE}`:
    case `${FETCH_SNIPPET_DETAIL}_${FAILURE}`:
        return { ...state, loading: false, error: action.error };


    default:
      return state;
  }
};

export default snippetReducer;

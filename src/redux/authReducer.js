import { LOGIN_SUCESS,LOGIN_FAIL,LOGOUT,REGISTER_SUCESS,REGISTER_FAIL} from '../actions/authAction';

const initialState = { 
    isAuthenticated: false, 
    user: null,
    loading: false,
    error: null,    
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case `${LOGIN_SUCESS}`:
      case `${REGISTER_SUCESS}`:
        return { ...state, isAuthenticated: true, user: action.payload, loading: false, error: null };
      case `${LOGIN_FAIL}`:
      case `${REGISTER_FAIL}`:
        return { ...state, isAuthenticated: false, user: null, loading: false, error: action.error };
      case `${LOGOUT}`:
        return { ...state, isAuthenticated: false, user: null, loading: false, error: null };
      case 'SET_AUTHENTICATED':
            return { ...state,isAuthenticated: action.payload};
      default:
        return state;
    }
  };
  
  export default authReducer
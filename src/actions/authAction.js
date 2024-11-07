import axios from "axios";

export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const REGISTER_SUCESS = "REGISTER_SUCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";


export const login = (username, password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        const { data } = await axios.post("http://localhost:8000/api/token/",{ username, password },config);
        console.log(data)

        dispatch({
            type: LOGIN_SUCESS,
            payload: data,
        });
        localStorage.setItem("authToken", data.access);
        localStorage.setItem("authRefreshToken", data.refresh);
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL,
            error: error.response ? error.response.data.detail : 'Login failed'
        });
    }
};


export const register = (email, password,username,firstname,lastname) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
              
        const { data } = await axios.post("http://localhost:8000/api/register/",{ email, password,username,firstname,lastname },config);
        console.log(data)

        dispatch({
            type: REGISTER_SUCESS,
            payload: data,
        });

        
    } catch (error) {
        console.log(error)
        dispatch({
            type: REGISTER_FAIL,
            error: error.response.data.error       });
    }
};

// Logout Action
export const logout = () => (dispatch) => {
    // Elimina cualquier token de autenticación de almacenamiento local o de sesión
    console.log('logout');
    localStorage.removeItem('authToken');
    localStorage.removeItem('authRefreshToken');
  
    dispatch({
      type: 'LOGOUT',
    });
  };
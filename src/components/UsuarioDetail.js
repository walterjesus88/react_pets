import React from 'react';
import { deleteUser } from '../redux/userAction';
import { useDispatch } from 'react-redux';


const UsuarioDetail = ({ user }) => {       
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{user.text}</h1>

            <button onClick={() => dispatch(deleteUser(user.id))}>Eliminar</button>
        </div>
    )
}

export default UsuarioDetail

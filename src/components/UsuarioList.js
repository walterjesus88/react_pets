// /components/TodoList.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
//import { addUser } from '../redux/userAction';
import UsuarioDetail from './UsuarioDetail';
import { fetchData } from '../services/apiService';  // Importa el servicio

const UsuarioList = () => {
    const [user, setUser] = useState('');
    const users = useSelector((state) => state.users); // Acceder al estado global
    const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (user.trim()) {
    //     dispatch(addUser(user));
    //     setUser('');
    //   }
    // };
  

  

    // return (
    //   <div>
    //     <h1>Todo List</h1>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         value={user}
    //         onChange={(e) => setUser(e.target.value)}
    //         placeholder="Add a new user"
    //       />
    //       <button type="submit">Add</button>
    //     </form>
    //     <ul>
    //       {users.map((user) => (
    //         <UsuarioDetail key={user.id} user={user} />
    //       ))}
    //     </ul>
    //   </div>
    // );
  };

export default UsuarioList;
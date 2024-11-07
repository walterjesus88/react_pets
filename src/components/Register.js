
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/authAction.js';
const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')    

    // const error = useSelector((state) => state.user.error)
    const error = useSelector((state) => state.user?.error);
    const successMessage = useSelector((state) => state.user?.user?.message);

    console.log("State in Register component:", useSelector((state) => state.user));
   

    const dispatchEvent = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchEvent(register(email, password,username,firstname,lastname))
    }  

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit ={handleSubmit}>  
                <input type="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="firstname" placeholder="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                <input type="lastname" placeholder="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
               
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <input type="email"    placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <button type="submit">Register</button> 
            </form>
        </div>
    );
};  

export default Register;
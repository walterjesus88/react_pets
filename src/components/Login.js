
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/authAction.js'


const Login = () => {
    const dispatchEvent = useDispatch() 

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const error = useSelector((state) => state.user.error)
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    console.log("State in Register component:", useSelector((state) => state.user));
    const handleSubmit = (e) => {
        e.preventDefault()       
        dispatchEvent(login(username, password))
    }

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isAuthenticated && <p style={{ color: 'green' }}>You are logged in!</p>}
            <form onSubmit={handleSubmit}>
                <input type="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>      
    )
}

export default Login
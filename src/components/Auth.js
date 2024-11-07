import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';
import UserProfile from './UserProfile';

const Auth = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const [isRegistering, setIsRegistering] = useState(false);

    console.log('estoy en authenticated',isAuthenticated)

    const toggleAuthMode = () => {
        setIsRegistering(!isRegistering);
    };

    if (isAuthenticated) {
        return <UserProfile />; // Componente para mostrar cuando el usuario está logueado
    }

    return (
        <div>
            {isRegistering ? <Register /> : <Login />}
            <button onClick={toggleAuthMode}>
                {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
            </button>
        </div>
    );
};

export default Auth;

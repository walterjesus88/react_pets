// UserProfile.js
import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authAction.js';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch(logout());
    };

    console.log('estoy en profile',isAuthenticated)


    
    // Efecto para redirigir cuando el usuario se autentica
    useEffect(() => {
        console.log(isAuthenticated)

        if (isAuthenticated) {
        navigate('/profile'); // O cualquier otra ruta
        }
    }, [isAuthenticated, navigate]);
    
    return (
        <div>
            <h2>User Profile</h2>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>No user information available.</p>
            )}
        </div>
    );
};

export default UserProfile;

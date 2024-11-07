// UserProfile.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authAction.js';

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h2>Welcome, {user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserProfile;

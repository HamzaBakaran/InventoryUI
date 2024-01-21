// ProtectedRouteAdmin.js

import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { RootState } from '../store';
import parseJwt from './parseJwt'; // Import the parseJwt function


const ProtectedRouteAdmin = () => {
    const token = localStorage.getItem('userToken');
    const decodedToken = token ? parseJwt(token) : null;
    const isAdmin = (Array.isArray(decodedToken?.authorities) && decodedToken?.authorities.some(auth => auth.authority === 'ADMIN')) ?? false;

 

    // If the user is not an admin, show an unauthorized message
    if (!isAdmin) {
        return (
            <div className='unauthorized'>
                <h1>Unauthorized:</h1>
                <span>You do not have permission to access this resource.</span>
            </div>
        );
    }

    // Returns child route elements
    return <Outlet />;
};

export default ProtectedRouteAdmin;

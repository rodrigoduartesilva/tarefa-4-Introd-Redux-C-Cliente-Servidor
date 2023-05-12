import { userContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { userLogged } = userContext(AuthContext);

    if (!userLogged) {
        return <Navigate to='/login' />
    } else {
        return children;
    }
}

export default ProtectedRoute;
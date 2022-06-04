import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const currentUser = useSelector((state) => state.user.currentUser);
    return (
        currentUser != null ? children : <Navigate to="/" />
    );
}

export default PrivateRoute;
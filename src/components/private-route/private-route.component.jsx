import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.selector';

function PrivateRoute({children}) {
    const currentUser = useSelector(selectCurrentUser);
    return (
        currentUser != null ? children : <Navigate to="/" />
    );
}

export default PrivateRoute;
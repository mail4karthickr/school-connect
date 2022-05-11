import './parent-dashboard.styles.js';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const ParentDashboard = () => {
    const currentUser = useSelector(selectCurrentUser);
    <div>{`${currentUser.email}${currentUser.type}`}</div>
}

export default ParentDashboard;
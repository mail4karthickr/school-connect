import './staff-dashboard.styles.js';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const StaffDashboard = () => {
    const currentUser = useSelector(selectCurrentUser);
    <div>{currentUser.email}</div>
}

export default StaffDashboard;
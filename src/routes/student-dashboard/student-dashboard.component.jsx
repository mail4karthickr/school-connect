import './student-dashboard.styles.js';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const StudentDashboard = () => {
    const currentUser = useSelector(selectCurrentUser);
    return <div>{`${currentUser.email}${currentUser.type}`}</div>
}

export default StudentDashboard;
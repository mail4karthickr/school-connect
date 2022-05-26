import { StudentDashboardContainer } from './student-dashboard.styles.js';
import { useSelector } from 'react-redux';
import StudentDashboardSideNav from '../../components/student-dashboard-sidenav/student-dashboard-sidenav.component';
import Assignments from '../../components/assignments/assignment.component';
import { getSelectedTab } from '../../store/student/student.selector';
import StudentSideNavOptions from '../../components/StudentSideNavOptions';
import Calendar  from '../../components/calendar/calendar.component';

const StudentDashboard = () => {
    const selectedTab = useSelector(getSelectedTab);

    const selectedComponent = () => {
        switch(selectedTab) {
            case StudentSideNavOptions.ASSIGNMENTS:
                return <Assignments />;
            case StudentSideNavOptions.CALENDAR:
                return <Calendar />;
            default:
                return <Assignments />;
        }
    }
    console.log("SelectedTab -- " + selectedTab);
    return (
        <StudentDashboardContainer>
            <StudentDashboardSideNav />
            {selectedComponent()}
        </StudentDashboardContainer>
    );
}

export default StudentDashboard;
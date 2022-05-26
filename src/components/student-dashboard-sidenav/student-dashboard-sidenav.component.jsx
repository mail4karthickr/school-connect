import { 
    SideNavContainer,
    ProfilePic,
    StudentImageContainer,
    StudentInfoContainer,
    Button,
    StudentInfoSideNav
} from './student-dashboard-sidenav.styles.js';
import {
    Title,
    SubTitle
} from '../common.style.js';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { 
    GetStudentInfoStart,
    ChangedSelectedTab
 } from '../../store/student/student.action';
 import StudentSideNavOptions from '../StudentSideNavOptions';

const StudentDashboardSideNav = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser.info);
    const [showInfo, setShowInfo] = useState(false);

    const toggled = (isOpen) => {
        setShowInfo(isOpen);
    }

    const changedTab = (category) => {
        dispatch(ChangedSelectedTab(category));
    }

    return (
        <StudentInfoSideNav toggled={toggled}>
        { showInfo && 
            <SideNavContainer>
                <StudentImageContainer>
                    <ProfilePic />
                    <Title>{user.displayName}</Title>
                    <SubTitle>more</SubTitle>
                </StudentImageContainer>
                <StudentInfoContainer>
                    {
                        Object.keys(StudentSideNavOptions).map((category) => {
                            const value = StudentSideNavOptions[category]
                            return <Button onClick={() => {changedTab(value)}} key={category}>{value}</Button>
                        })
                    }
                </StudentInfoContainer>
            </SideNavContainer>
        }
        </StudentInfoSideNav>
    );
}

export default StudentDashboardSideNav;
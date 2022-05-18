import { 
    SideNavContainer,
    ProfilePic,
    StudentInfo
} from './student-dashboard-sidenav.styles.js';
import {
    Title,
    SubTitle
} from '../common.style.js';

import SideNav from '../side-nav/side-nav.component';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { 
    GetStudentInfoStart
 } from '../../store/student/student.action';

const StudentDashboardSideNav = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() =>{
        dispatch(GetStudentInfoStart(currentUser.id));
    }, [currentUser, dispatch]);

    return (
        <SideNav>
            <SideNavContainer>
                <StudentInfo>
                    <ProfilePic />
                    <Title>{currentUser.displayName}</Title>
                    <SubTitle>H4</SubTitle>
                </StudentInfo>
            </SideNavContainer>
        </SideNav>
    );
}

export default StudentDashboardSideNav;
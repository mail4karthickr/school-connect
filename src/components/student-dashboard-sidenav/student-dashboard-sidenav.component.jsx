import { 
    SideNavContainer,
    ProfilePic,
    StudentImageContainer,
    StudentInfoContainer as StudentOptionsContainer,
    Button,
    StudentInfoSideNav,
    SideNavLink
} from './student-dashboard-sidenav.styles.js';
import {
    Title,
    SubTitle
} from '../common.style.js';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    IsSideNavOpen,
    ChangedSelectedTab
 } from '../../store/student/student.action';
 import StudentSideNavOptions from '../student-sidenav-options';
 import AppRoutes from '../../routes/app-routes';

const StudentDashboardSideNav = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.user.currentUser.info
    });
    const isSideNavOpen = useSelector((state) => {
        return state.student.isSideNavOpen
    });

    const toggled = (isOpen) => {
        dispatch(IsSideNavOpen(isOpen));
    }

    const changedTab = (category) => {
        dispatch(ChangedSelectedTab(category));
    }

    return (
        <StudentInfoSideNav toggled={toggled} key={isSideNavOpen} shouldOpen={isSideNavOpen}>
        <SideNavContainer>
        <StudentImageContainer>
            <ProfilePic />
            <Title>{user.displayName}</Title>
            <SubTitle>{user.class}</SubTitle>
            <SubTitle>{`RegNum: ${user.registerNumber}`}</SubTitle>
        </StudentImageContainer>
        <StudentOptionsContainer>
            {
                Object.keys(StudentSideNavOptions).map((category) => {
                    const value = StudentSideNavOptions[category];
                    const route = AppRoutes[category];
                    return (
                        <SideNavLink 
                            to={route}
                            onClick={() => changedTab(category)} 
                            key={category}>{value}</SideNavLink>
                    )
                })
            }
        </StudentOptionsContainer>
    </SideNavContainer>
        </StudentInfoSideNav>
    );
}

export default StudentDashboardSideNav;
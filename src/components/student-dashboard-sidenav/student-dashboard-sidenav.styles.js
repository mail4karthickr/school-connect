import styled from 'styled-components';
import SideNav from '../side-nav/side-nav.component';
import { Link } from 'react-router-dom';

export const SideNavContainer = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StudentImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: orange;
`

export const ProfilePic = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: cyan;
`
export const StudentInfoContainer = styled.div`
    width: 100%;
    background-color: brown;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    align-self: center;
    justify-self: center;
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`
export const StudentInfoSideNav = styled(SideNav)`
    padding: 100px;
    top: 50px;
    position: relative;
    /* position: absolute;
    z-index: 1000;
    background-color: yellow; */
`

export const SideNavLink = styled(Link)`
    text-decoration: none;
`;
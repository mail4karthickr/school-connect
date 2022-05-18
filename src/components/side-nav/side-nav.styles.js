import styled, { css } from 'styled-components';
import { List, XLg } from 'react-bootstrap-icons';

export const SideNavContainer = styled.div`
    width: ${props => props.isOpen ? "250px" : "50px"};
    height: 100vh;
    background-color: blue;
    display: flex;
    flex-direction: column;
    transition: 0.4s ease-out;
`;

export const IconContainer = styled.div`
     background-color: lightgray;
     display: flex;
     justify-content: flex-end;
     padding: 10px;
     cursor: pointer;
`
export const ContentContainer = styled.div`
    overflow: hidden;
    height: 100%;
`

const IconStyle = css`
    color: white;
    width: 26px;
    height: 26px;

    &:hover {
        color: black;
        transition: 0.4s linear;
   }
`

export const ListIcon = styled(List)`
    ${IconStyle}
`

export const CloseIcon = styled(XLg)`
    ${IconStyle}
`
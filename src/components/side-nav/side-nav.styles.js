import styled, { css, keyframes } from 'styled-components';
import { List, XLg } from 'react-bootstrap-icons';

export const SideNavContainer = styled.div`
    width: 250px;
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    height: 100vh;
    background-color: blue;
    display: flex;
    flex-direction: column;
    position: absolute;
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
   }
`

export const ListIcon = styled(List)`
    ${IconStyle}
    margin-top: 10px;
`

export const CloseIcon = styled(XLg)`
    ${IconStyle}
`
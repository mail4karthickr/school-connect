import styled from 'styled-components';
import SignInBg from '../../assets/signin-bg.jpg';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${SignInBg});
`

export const Mask = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: black;
    opacity: 0.2;
`
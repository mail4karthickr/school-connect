import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 400px;
    height: 500px;
    position: absolute;
    z-index: 2;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    background: lightblue;
`

export const Title = styled.h1`
`

export const TextField = styled.input`
    type: 'text';
    placeholder: ${props => props.placeholder};
    width: 80%;
    height: 25px;
    outline: none;
`

export const Button = styled.button`
    type: 'button';
    width: 50%;
    height: 50px;
    cursor: pointer;
`
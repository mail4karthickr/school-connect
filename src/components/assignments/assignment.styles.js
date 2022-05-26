import styled from 'styled-components';

export const AssignmentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    height: 100vh;
    padding: 20px;
`

export const SubjectsContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 20px;
    flex-wrap: wrap;
`

export const SubjectButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 20px;
    color: white;
    width: 200px;
    height: 100px;
    font-size: 1.5rem;
    background-color: ${props => props.color};

    &:hover {
        color: lightgray;
    }
`
export const Title = styled.h1`
    align-self: center;
`
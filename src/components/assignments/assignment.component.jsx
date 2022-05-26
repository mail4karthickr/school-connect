import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    AssignmentsContainer,
    SubjectsContainer,
    SubjectButton,
    Title
} from './assignment.styles.js';
import {
    GetSubjectsStart
} from '../../store/student/student.action';
import { getClassName } from '../../store/student/student.selector';
import Spinner from '../../components/spinner/spinner.component';

const Assignments = () => {
    const dispatch = useDispatch();
    const className = useSelector(getClassName);
    const subjects = useSelector((state) => state.student.subjects);

    useEffect(() => {
        if (className) {
            dispatch(GetSubjectsStart(className));
        }
    }, [className, dispatch])

    return (
        <AssignmentsContainer>
            <Title>Assignments</Title>
            <SubjectsContainer>
                {
                    subjects.isEmpty ? <Spinner /> : subjects.map((subject) => {
                        const { color, title } = subject;
                        return <SubjectButton color={color} key={title}>{title}</SubjectButton>
                    })
                }
            </SubjectsContainer>
        </AssignmentsContainer>
    );
}

export default Assignments;
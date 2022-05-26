import Spinner from '../spinner/spinner.component';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SignInStart } from '../../store/user/user.action';
import { useState, useEffect } from 'react';
import { 
    signOnUserIsLoading, 
    selectSignOnError,
    selectCurrentUser
} from '../../store/user/user.selector';
import { 
    FormContainer, 
    TextField, 
    Title, 
    Button,
    ErrorMessage
} from './signin-form.styles';
import AppRoutes from '../../routes/app-routes.js';

const defaultFormFields = {
    email: 'mail4karthickr@gmail.com',
    password: '$Katkarthickr87'
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();
    const isLoading = useSelector(signOnUserIsLoading);
    const isSignOnError = useSelector(selectSignOnError);
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            if (currentUser.type === 'student') {
                navigate(AppRoutes.STUDENT_DASHBOARD);
            }
        }
    }, [currentUser])

    const signInHandler = () => {
        dispatch(SignInStart(email, password));
    }

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <FormContainer>
            <Title>SignIn</Title>
            <TextField 
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleTextChange}
            />
            <TextField 
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleTextChange}
            />
            <Button onClick={signInHandler}>SignIn</Button>
            { isLoading && <Spinner /> }
            { isSignOnError !== null && <ErrorMessage>{isSignOnError}</ErrorMessage> }
        </FormContainer>
    );
}

export default SignInForm;
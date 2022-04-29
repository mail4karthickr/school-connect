import { FormContainer, TextField, Title, Button } from './signin-form.styles';
import Spinner from '../spinner/spinner.component';
import { useDispatch } from 'react-redux';
import { SignInStart } from '../../store/user/user.action';
import { useState } from 'react';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

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
            <Spinner></Spinner>
        </FormContainer>
    );
}

export default SignInForm;
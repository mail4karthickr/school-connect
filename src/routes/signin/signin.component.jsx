import React from "react";
import { Background, Mask } from './signin.styles';
import SignInForm from '../../components/signin-form/signin-form.component.jsx';

const SignIn = () => {
    return (
        <Background>
            <Mask />
            <SignInForm/>
        </Background>
    );
}

export default SignIn;
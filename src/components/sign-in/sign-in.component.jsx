import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';
const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <CustomButton isGoogleSignIn onClick={logGoogleUser}>Sign in with Google Popup</CustomButton>
    </div>

  );
};

export default SignIn;
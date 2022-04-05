import React from 'react';

import './sign-in.styles.scss';

// import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGooglePopup, createUserDocumentFromAuth, auth } from '../../utils/firebase.utils';


const SignIn = () => {
  const handleChange = (event)=> {
    const {name, value} = event.target;

    // setFormFields({...formFields, [name]: value});
  };

  
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {/* <FormInput label="Email" inputOptions={{
        type:'email',
        onChange:handleChange,
        name:"email",
        required:true
      }}/>
      <FormInput label="Password" inputOptions={{
        type:'password',
        onChange:handleChange,
        name:"password",
        required:true
      }}/> */}
      <div className="buttons">
      <Button onClick={logGoogleUser}>Sign in</Button>
      <Button  buttonType="google" onClick={logGoogleUser}>Sign in with Google Popup</Button>
      </div>
    </div>

  );
};

export default SignIn;
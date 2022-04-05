import {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password:'',
  confirmPassword:''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password!==confirmPassword)
    {
      alert('Password does not match!');
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    } catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('User already registered!');
      }
      else{
        console.log('user creation encountered an error',error);
      }
    }
  }

  const handleChange = (event)=> {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput inputOptions={{
          type:"text",
          value:displayName,
          onChange:handleChange,
          name:"displayName",
          required:true
        }}
        label="Display Name"
        />
        <FormInput inputOptions={{
          type:"email",
          value:email,
          onChange:handleChange,
          name:"email",
          required:true
        }}
        label="Email"
        />
        <FormInput inputOptions={{
          type:"password",
          value:password,
          onChange:handleChange,
          name:"password",
          required:true
        }}
        label="Password"/>
        <FormInput inputOptions={{
          type:"password",
          value:confirmPassword,
          onChange:handleChange,
          name:"confirmPassword",
          required:true,
        }}
        label="Confirm Password"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  )
}

export default SignUpForm;
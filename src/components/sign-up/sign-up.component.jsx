import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/users.actions';

import './sign-up.styles.scss';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''})

  const {displayName, email, password, confirmPassword } = signUpCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart(displayName, email, password);

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);

    //   await createUserProfileDocument(user, { displayName });

    //   this.setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
    // } catch (error) {
    //   console.error(error);

    // }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setSignUpCredentials({...signUpCredentials, [name]: value});
  }


    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
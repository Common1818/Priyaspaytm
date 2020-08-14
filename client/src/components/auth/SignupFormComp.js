import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

import './css/LoginForm.css';

const SignupFormComp = ({ register, isAuthenticated, setAlert }) => {
   const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
   });

   const { firstname, lastname, email, password, confirmPassword } = formData;

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setAlert('Passwords do not match', 'danger');
      }
      console.log(formData);
      register(formData);
   };

   if (isAuthenticated) {
      return <Redirect to='/' />;
   }

   return (
      <form className='form form--register' onSubmit={handleSubmit}>
         <h1 className='form__title signup'>Sign Up For BicycleDrift</h1>
         <div className='form__helper'>
            <input
               type='text'
               value={firstname}
               onChange={handleChange}
               id='firstname'
               placeholder='User'
               className=' form__input'
            />
            <label className='form__label' htmlFor='firstname'>
               First Name
            </label>
         </div>
         <div className='form__helper'>
            <input
               type='text'
               id='lastname'
               value={lastname}
               onChange={handleChange}
               placeholder='User'
               className=' form__input'
            />
            <label className='form__label' htmlFor='lastname'>
               Last Name
            </label>
         </div>
         <div className='form__helper'>
            <input
               type='email'
               value={email}
               id='email'
               onChange={handleChange}
               placeholder='Email'
               className='form__input'
            />
            <label className='form__label' htmlFor='email'>
               Email
            </label>
         </div>
         <div className='form__helper'>
            <input
               type='password'
               value={password}
               id='password'
               onChange={handleChange}
               placeholder='Password'
               className='form__input'
               minLength='6'
            />
            <label className='form__label' htmlFor='password'>
               Password
            </label>
         </div>
         <div className='form__helper'>
            <input
               type='password'
               value={confirmPassword}
               id='confirmPassword'
               onChange={handleChange}
               placeholder='Confirm password'
               className='form__input'
               minLength='6'
            />
            <label className='form__label' htmlFor='confirmPassword'>
               Confirm password
            </label>
         </div>
         <button type='submit' className='form__button'>
            Register
         </button>
         <p className='form__text'>Already have an account?</p>{' '}
         <label htmlFor='toggle' className='form__link'>
            Sign In!
         </label>
      </form>
   );
};

const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(SignupFormComp);

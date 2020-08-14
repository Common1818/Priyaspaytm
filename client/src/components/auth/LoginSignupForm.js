import React from 'react';
import './css/LoginForm.css';
import LoginFormComp from './LoginFormComp';
import SignupFormComp from './SignupFormComp';
import Bike from './images/Bike.png';

const LoginSignupForm = () => {
   return (
      <div className='loginForm'>
         <div className=' container'>
            <div className='box'>
               <input
                  type='checkbox'
                  id='toggle'
                  className='box__toggle'
                  hidden
               ></input>
               <img
                  src={Bike}
                  alt='Login and SignUp form'
                  className='box__image'
               ></img>
               <SignupFormComp />
               <LoginFormComp />
            </div>
         </div>
      </div>
   );
};

export default LoginSignupForm;

import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import { axios } from 'axios'


const Auth = () => {

  const [isSignup, setIsSignup] = useState(true) 

  const handleChange = () => { }
  
  const switchMode = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp)
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content ">
          <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
          <form onSubmit={() => {}}>
            {isSignup && (
              <div className='auth__form-container_fields-content_input '>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name='fullName'
                  placeholder='Full Name'
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className='auth__form-container_fields-content_input '>
              <label htmlFor="fullName">User Name</label>
              <input
                  type="text"
                  name='username'
                  placeholder='User Name'
                  onChange={handleChange}
                  required
                />
            </div>
            {isSignup && (
              <div className='auth__form-container_fields-content_input '>
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  type="number"
                  name='avatarURL'
                  placeholder='Phone Number'
                  onChange={handleChange}
                  required
                />
              </div>
            )}
             <div className='auth__form-container_fields-content_input '>
              <label htmlFor="fullName">Password</label>
              <input
                  type="password"
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                  required
                />
            </div>
            {isSignup && (
             <div className='auth__form-container_fields-content_input '>
             <label htmlFor="confirmPassword">Confirm Password</label>
             <input
                 type="password"
                 name='confirmPassword'
                 placeholder='Confirm Password'
                 onChange={handleChange}
                 required
               />
           </div>
            )}
          </form>
          <div className="auth__form-container_fields-accounts">
            <p> 
              {isSignup ? "Already have an account?" : "Don't have an acccount?"}
              <span className='cursor-pointer hover:text-black transition-all' onClick={switchMode}>
                {isSignup? ' Sign In' : ' Sign up'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={'./assets/images/signin_banner.webp'} alt="Banner" />
      </div>
    </div>
  )
}

export default Auth
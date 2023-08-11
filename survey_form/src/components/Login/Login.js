import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Loginform from '../Loginform/Loginform'
function Login() {
  return (
    <div className='prnt'>
      <div className='text-container'>
        <h1>Welcome Page <br />
          One line text <br />
          Will be here
        </h1>
        <h3>Sign in to continue access pages</h3>
        <div className='btmsec'>
          <p>Don,t Have An Account?</p>
          <button><Link to="/register" className='lnk'>Register</Link></button>
        </div>
      </div>
      <div className='frm'>
        <Loginform />
      </div>
    </div>
  )
}

export default Login

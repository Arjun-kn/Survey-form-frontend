import React from 'react'
import './Loginform.css'

export default function Loginform() {
  return (
    <div>
      <div className='form-conatainer'>
        <h1 className='heading'>Sign IN</h1>
        <p className='para'>Sign in to continue access pages</p>
        <form >
        <label htmlFor='email'>Email</label>
        <input  className='inp' type='email' name="email" /><hr/>
        <label htmlFor='password'>Password</label>
        <input  className="inp" type='password' name="password" /><hr/>
        <button className='btn'>Sign in</button>
        </form>


      </div>
    </div>
  )
}

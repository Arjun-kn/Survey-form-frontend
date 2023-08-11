import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        profession: '',
        password: '',
    })

    async function submitHandler(e) {
        e.preventDefault()
        
            try {
                await fetch('http://localhost:8080/register', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: user.name,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                        profession: user.profession,
                        password: user.password
                    })
                });

            } catch (error) {
                //console.log(data);
                console.log(error)
            }
        }

    return (
        <div className='container'>
            <div className='text-container'>
                <h1>Welcome Page <br />
                    One line text <br />
                    Will be here
                </h1>
                <h3>Sign in to continue access pages</h3>
                <div className='btmsec'>
                    <p>Alreadt have an accout?</p>
                    <button><Link to="/" className='lnk'>Sign-In</Link></button>
                </div>
            </div>
            <div className="card">
                <h1>Register</h1>
                <p>Register to continue access pages</p>
                <form onSubmit={submitHandler} className='inputs'>
                    <div className='inputContainer'>
                        <input required type="text" name="Name" placeholder='Name'
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                        <input required type="email" name="Email" placeholder='email'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className='inputContainer'>
                        <input type="number" name="Mobile" placeholder='Phone'
                            value={user.phoneNumber}
                            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                        />
                        <input type="text" name='Profession' placeholder='Profession'
                            value={user.profession}
                            onChange={(e) => setUser({ ...user, profession: e.target.value })}
                        />
                    </div>
                    <div className='inputContainer'>
                        <input required type="password" name="Password" placeholder='Password'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        <input required type="password" name="ConfirmPassword" placeholder='Confirm Password' />
                    </div>
                    <div className='terms'>
                        <h6><input required id='checkbox' type='checkbox' />I agree the terms & conditions receiving the marketing and promotional materials</h6>

                    </div>
                    <button id='register-btn'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register

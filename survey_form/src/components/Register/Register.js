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



/**
 * import React, { useState } from "react";
import "./Loginform.css";
import { useNavigate } from "react-router-dom";

export default function Loginform() {
  let [data, setdata] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState("");
  const navigate = useNavigate();

  async function formSubmit(e) {
    e.preventDefault();

    if (!data.email && !data.password) {
      setError("Filled should be not empty");
    } else if (!data.email) {
      setError("Email should not be empty");
    } else if (!data.password) {
      setError("passwordd should not be empty");
    } else if (data.password.length < 3) {
      setError("password should not be less than 3 character");
    } else if (data.password.length > 10) {
      setError("password should not be more than 10 character");
    } else {
      try {
        let response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });
        const responseData = await response.json();
        if (response.ok) {
          setError("");
          const token = responseData.token;
          console.log(token);
          sessionStorage.setItem("token", token);
          navigate("/postdata");
        } else {
          setError("Invalid credential");
        }
      } catch (error) {
        console.log(data);
        setError("An error occurred. Please try again later");
      }
    }

    setTimeout(() => {
      setError("");
    }, 3000);
  }

  return (
    <div>
      <div className="form-conatainer">
        <h1 className="heading">Sign In</h1>
        <p className="para">Sign in to continue access pages</p>

        <form method="post" onSubmit={formSubmit}>
          {error !== "" && <div className="error">{error}</div>}
          <label htmlFor="email">Email</label>
          <input
            className="inp"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <hr />
          <label htmlFor="password">Password</label>
          <input
            className="inp"
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
          <hr />
          <button className="btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
 */
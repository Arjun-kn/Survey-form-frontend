import React, { useRef, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [errs, setErrs] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmpassword: "",
  });

  let navigate = useNavigate();
  const mathchPassword = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    let confirmPass = mathchPassword.current.value;
    if (
      !user.name &&
      !user.email &&
      !user.phone &&
      !user.profession &&
      !user.password &&
      !user.confirmpassword
    ) {
      setErrs("All fields are required");
    } else if (!user.name) {
      setErrs(`Name shouldn't be empty`);
    } else if (!user.email) {
      setErrs(`Email shouldn't be empty`);
    } else if (!user.phone) {
      setErrs(`Phone Number shouldn't be empty`);
    } else if (!user.profession) {
      setErrs(`Profession required`);
    } else if (user.password !== confirmPass) {
      setErrs(`Passwords are not matching`);
    } else if (user.password.length < 3) {
      setErrs(`Passwords should not be less than 3 character`);
    } else if (user.password.length > 10) {
      setErrs(`Passwords should not be more than 10 character`);
    } else {
      try {
        const response = await fetch("https://survey-from-backend-la8p.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            phone: user.phone,
            profession: user.profession,
            password: user.password,
          }),
        });

        if (response.ok) {
          setErrs("");
          navigate("/");
          await response.json();
        } else {
          //..............................................................

          await response.text();
          if (response.status === 400) {
            setErrs("User already exists");
          }
        }
      } catch (error) {
        console.log("errdesc" + error);
      }
    }

    setTimeout(() => {
      setErrs("");
    }, 3000);
  }

  return (
    <div className="form-container">
      <div className="text-container">
        <h1>
          Welcome Page <br />
          One line text <br />
          Will be here
        </h1>
        <h3>Sign in to continue access pages</h3>
        <div className="btmsec">
          <p>Alreadt have an accout?</p>
          <button>
            <Link to="/" className="lnk">
              Sign-In
            </Link>
          </button>
        </div>
      </div>
      <div className="form-card">
        <h1>Register</h1>
        <p>Register to continue access pages</p>
        <form onSubmit={submitHandler} method="POST" className="inputs">
          {errs !== "" && <p className="errMsg">{errs}</p>}
          <div className="inputContainer">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="email"
              name="Email"
              placeholder="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <input
              type="number"
              name="Mobile"
              placeholder="Phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <input
              type="text"
              name="Profession"
              placeholder="Profession"
              value={user.profession}
              onChange={(e) => setUser({ ...user, profession: e.target.value })}
            />
          </div>
          <div className="inputContainer">
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
              ref={mathchPassword}
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="terms">
            <h6>
              <input id="checkbox" type="checkbox" />I agree the terms &
              conditions receiving the marketing and promotional materials
            </h6>
          </div>
          <button id="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

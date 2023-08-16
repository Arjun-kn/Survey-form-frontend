import React, { useState } from "react";
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
        let response = await fetch("https://survey-from-backend-la8p.onrender.com/signin", {
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

          const token = responseData;

          sessionStorage.setItem("token", token);
          navigate("/home");
        } else {
          setError("Invalid credential");
        }
      } catch (error) {
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
          <button className="signbtn hoveronbtn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Signup.css"

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    number: "",
    password: "",
  });
  const [err, setErr] = useState({
    userNameErr: "",
    mobileNumberErr: "",
    passwordErr: "",
  });
let emailregexp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const signUpvalidation = (e) => {
    e.preventDefault();
    let isValid = true
    if(user.name.length<3){
      setErr((prev) => ({ ...prev, userNameErr: "Enter the proper Name" }));
      isValid=false
    }
    else{
      setErr((prev) => ({ ...prev, userNameErr: "" }));
    }
    if (user.number.length !== 10) {
      setErr((prev) => ({
        ...prev,
        mobileNumberErr: "Enter the proper Phone number",
      }));
      isValid = false;
    } else {
      setErr((prev) => ({
        ...prev,
        mobileNumberErr: "",
      }));
      
    }
    if (user.password.length<7) {
      setErr((prev) => ({
        ...prev,
        passwordErr: "password must be atleast 7 characters",
      }));
      isValid = false;
    } else {
      setErr((prev) => ({
        ...prev,
        passwordErrErr: "",
      }));
      
    }
    if(isValid){
      const userArr = JSON.parse(localStorage.getItem("usersArr")) || [];
    userArr.push(user);
    localStorage.setItem("usersArr", JSON.stringify(userArr));
    navigate("/Login");
    }
  };
  return (
    <>
      <form action="" className="signupForm">
        <h1>Please create an account</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
             {err.userNameErr && <p className="text-danger fs-5" >{err.userNameErr}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={user.number}
            onChange={(e) => {
              setUser({ ...user, number: e.target.value });
            }}
          />
            {err.mobileNumberErr && (
              <p className="text-danger fs-5">{err.mobileNumberErr}</p>
            )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
             {err.passwordErr && (
              <p className="text-danger fs-5">{err.passwordErr}</p>
            )}
        </div>
        <div className="form-group">
          <button className="btn btn-warning"type="submit" onClick={signUpvalidation}>
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
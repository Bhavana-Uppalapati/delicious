import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../context/Context";
import "./login.css"
function Login() {
  const [loginNumber, setLoginNumber] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [err, setErr] = useState({
    loginNumberErr: "",
    loginPasswordErr: "",
  });
  const { userLoggedIn, setuserLoggedIn } = useContext(context);
  const navigate = useNavigate();
  function formValidation(e) {
    e.preventDefault();
    let registeredUsers = JSON.parse(localStorage.getItem("usersArr"));
    console.log(registeredUsers);
    let count = 0;
    for (let obj of registeredUsers) {
      if (obj.number === loginNumber && obj.password === loginPassword) { 
        navigate("/Cart");
      } else {
        count++;
      }
    }
    if (count === registeredUsers.length) {
      alert("Enter valid details");
    }
  }
  return (
    <div class="login-container">
   
      <div className="form-container">
        <form id="login-form">
          <div>
            <input
              type="text"
              placeholder="Enter the mobile Number"
              value={loginNumber}
              onChange={(e) => {
                setLoginNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter the Password"
              value={loginPassword}
              onChange={(e) => {
                setloginPassword(e.target.value);
              }}
            />
            {err.mobileNumberErr && (
              <p className="red-color">{err.mobileNumberErr}</p>
            )}
          </div>
          <div className="Login-btn-container ">
            <button className="btn btn-warning"type="submit" onClick={formValidation}>
              Login
            </button>
          </div>
          <div className="signupBtn">
            <h4>Don't have an account? </h4>
            <Link to={"/Form"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
import React, { useContext, useState } from "react";


import { Link, useNavigate } from "react-router-dom";
import { context } from "../context/Context";
function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setemail] = useState("");
  const [err, setErr] = useState({
    userNameErr: "",
    mobileNumberErr: "",
    emailErr: "",
  });
  const { userLoggedIn, setuserLoggedIn, userName, setUserName } =
    useContext(context);
  const navigate = useNavigate();
  let emailregexp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  function formValidation(e) {
    e.preventDefault();
    let logging = true;
    if (userName.length < 3) {
      setErr((prev) => ({ ...prev, userNameErr: "Enter the proper Name" }));
      logging = false;
    } else {
      setErr((prev) => ({ ...prev, userNameErr: "" }));
      logging = true;
    }
    if (mobileNumber.length !== 10) {
      setErr((prev) => ({
        ...prev,
        mobileNumberErr: "Enter the proper Phone number",
      }));
      logging = false;
    } else {
      setErr((prev) => ({
        ...prev,
        mobileNumberErr: "",
      }));
      logging = true;
    }
    if (!emailregexp.test(email)) {
      setErr((prev) => ({ ...prev, emailErr: "Enter the valid email id" }));
      logging = false;
    } else {
      setErr((prev) => ({ ...prev, emailErr: "" }));
      logging = true;
    }
    if (logging) {
      setuserLoggedIn(true);
      navigate("/Cart");
    }
  }
  return (
    <div class="login-container d-flex justify-content-center align-items-center flex-column mt-5 pt-5">
      <h2>Login to Delicious</h2>
      <div className="form-container mt-3">
        <form id="login-form">
          <div>
            <input className="mt-3"
            style={{width:"50vw"}}
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {err.userNameErr && <p className="text-danger fs-5" >{err.userNameErr}</p>}
          </div>
          <div>
            <input className="mt-3"
             style={{width:"50vw"}}
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            {err.mobileNumberErr && (
              <p className="text-danger fs-5">{err.mobileNumberErr}</p>
            )}
          </div>
          <div>
            <input className="mt-3"
             style={{width:"50vw"}}
              type="text"
              placeholder="email address"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            {err.emailErr && <p className="text-danger fs-5">{err.emailErr}</p>}
          </div>
          <div className="Login-btn-container text-center mt-3 ">
            <button className="btn btn-warning" type="submit" onClick={formValidation}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
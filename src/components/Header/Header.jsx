import React from "react";
import logo from "./logo.jpeg";
import "./Header.css";

export default function Header() {
  return (
    <>
    
      <nav className="navbar  navbar-expand-lg navbar-expand-md ">
        <div className="container">
          <img id="logo" className="navbar-brand" src={logo} alt="" />

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-evenly">
              <ul className="navbar-nav justify-content-evenly" style={{width:'500px'}}>
                <li className="nav-item fs-5">Home</li>
                <li className="nav-item fs-5">offers</li>
                <li className="nav-item fs-5">Menu</li>
                <li className="nav-item fs-5">Help</li>
              </ul>
            </div>
          </div>
        <div className='d-flex justify-content-between signin' style={{width:'150px'}}>
        <i className="fa-solid fa-cart-shopping mt-2"></i>
          <button className="btn btn-warning">Signin</button>
        </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

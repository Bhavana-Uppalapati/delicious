import React, { useContext } from "react";
import logo from "./logo3.jpeg";
import "./Header.css";
import { Link } from "react-router-dom";
import { context } from "../context/Context";



export default function Header() {
  const {count} = useContext(context)

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

               <Link to="/"> <li className="nav-item fs-3">Home</li> </Link>
               
               
                <li className="nav-item fs-3">Offers</li>
                <li className="nav-item fs-3">Menu</li>
                <Link to ="/Help">
                <li className="nav-item fs-3">Help</li>
                </Link>
            

              </ul>
            </div>
          </div>
        <div className='d-flex justify-content-between signin' style={{width:'150px'}}>
          <Link to="/cart">
          <i className="fa-solid fa-cart-shopping mt-2"></i> 
          </Link>
       
         
         <div id="count">{count}</div>
       
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  signin
</button>


<div class="modal " style={{top:"80px"}} id="exampleModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content d-flex align-items-center">
      <div class="modal-header " >
        <h1 class="modal-title fs-5" id="exampleModalLabel"> Login Form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body form">
   
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" className="mb-3"/>
        <label htmlFor="password">Password</label>
        <input type="password" className="mb-3"/>
        <label htmlFor="number">Phone Number</label>
        <input type="number" className="mb-3"/>
       <div className="text-center">
       <button id="loginbtn" className="btn btn-warning">Login</button>
       </div>
     
      </div>
      <div class="modal-footer">
      
      </div>
    </div>
  </div>
</div>
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

import React, { useContext, useRef, useState ,useEffect} from "react";
import axios from "axios";
import logo from "./logo3.jpeg";
import "./Header.css";
import { Link } from "react-router-dom";
import { context } from "../context/Context";

export default function Header() {
  const { count, setCount, userName } = useContext(context);
  const { cartlist, setCartlist } = useContext(context);
  const modalRef = useRef(null);
  if (cartlist.length === 0) {
    setCount(0);
  }
  const [currLocation, setCurrLocation] = useState({});
  // const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocation();
    // getLocationJs();
  }, []);

  
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
     <div>
     <img id="logo" className="navbar-brand" src={logo} alt="" />
     </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul
                className="navbar-nav justify-content-evenly w-100"
                // style={{ width: "100%" }}
              >
                 <li className="nav-item fs-3"> <i class="fa-solid fa-location-arrow"></i>{currLocation.city}</li>
                <Link to="/">
                  
                  <li className="nav-item fs-3">Home</li>
                </Link>

{/*                
                <Link to="/Orders">   <li className="nav-item fs-3">Orders</li></Link> */}  
              
                <Link to="/Help">
                  <li className="nav-item fs-3">Help</li>
                </Link>
                <li className="nav-item">
                <Link to="/cart">
                <p className="fs-6 text-dark"> <i className="fa-solid fa-cart-shopping mt-2"></i> {count}</p>
              </Link>
                </li>
                <li className="nav-item">
                <Link to="/login">
              {userName == "" ? (
                <button type="button" className="btn btn-warning">
                  signin
                </button>
              ) : (
                userName 
              )} 
            </Link> 
                </li>
              </ul>
        
          </div>
        </div>
       
      </nav>
    
    </>
  );
}

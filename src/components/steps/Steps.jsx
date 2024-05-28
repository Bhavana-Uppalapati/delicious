import React from "react";
import cart from "./addtocart.png";
import signin from "./Screenshot 2024-05-23 181205.png";
import pay from "./pay.png";
import delivered from "./delivered.png";
import './Steps.css'


export default function Steps() {
  return (
    <div className="d-flex justify-content-between container  mt-5 pt-5 col-lg-6 steps-container">
      <div className="maindiv">
        <div
          className="d-flex justify-content-center align-items-center stepsdiv"
          style={{
          
            backgroundColor: "orange",
            borderRadius: "50%",
          }}
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
       <div className="text-center">
       <h1>Cart</h1>
       </div>
      </div>
      <div className="maindiv">
        <div  className="d-flex justify-content-center align-items-center stepsdiv"
          style={{
          
            backgroundColor: "black",
         
            borderRadius: "50%",
          }}>
          <i style={{   color:"white",}}class="fa-solid fa-user"></i>
        </div>
       <div  className="text-center"> <h1>signin</h1></div>
      </div>
      <div className="maindiv">
        <div  className="d-flex justify-content-center align-items-center text-center stepsdiv"
          style={{
           
            backgroundColor: "grey",
            borderRadius: "50%",
          }}>
          <i style={{   color:"white",fontSize:"40px"}}class="fa-brands fa-google-pay"></i>
        </div>
      <div className="text-center">  <h1>Pay</h1></div>
      </div>
      <div className="maindiv">
        <div  className="d-flex justify-content-center align-items-center stepsdiv"
          style={{
           
            backgroundColor: "green",
            color:"white",
            borderRadius: "50%",
          }}>
          <i style={{   color:"white",}}class="fa-solid fa-motorcycle"></i>
        </div>
       <div  className="text-center">
      
       <h1 id="delivery">Delivered</h1>
       </div>
      </div>
    </div>
  );
}

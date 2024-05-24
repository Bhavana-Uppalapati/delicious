import React from "react";
import cart from "./addtocart.png";
import signin from "./Screenshot 2024-05-23 181205.png";
import pay from "./pay.png";
import delivered from "./delivered.png";
let steps = [
  {
    Image: cart,
    task: "Add to cart",
    desc: "Let your customers follow and understand your process.",
  },
  {
    Image: signin,
    task: "Sign in",
    desc: "Click on the icon to adapt it to your purpose..",
  },
  {
    Image: pay,
    task: "Pay",
    desc: "pay to get your food fresh.",
  },
  {
    Image: delivered,
    task: "Get Delivered",
    desc: "Get delivered at you door step.",
  },
];

export default function Steps() {
  return (
    <div className="d-flex justify-content-around container  mt-5 pt-5 col-lg-6">
      <div className="text-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "100px",
            height: "100px",
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
      <div>
        <div  className="d-flex justify-content-center align-items-center"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "black",
         
            borderRadius: "50%",
          }}>
          <i style={{   color:"white",}}class="fa-solid fa-user"></i>
        </div>
       <div  className="text-center"> <h1>signin</h1></div>
      </div>
      <div>
        <div  className="d-flex justify-content-center align-items-center text-center"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "grey",
            borderRadius: "50%",
          }}>
          <i style={{   color:"white",fontSize:"40px"}}class="fa-brands fa-google-pay"></i>
        </div>
      <div className="text-center">  <h1>Pay</h1></div>
      </div>
      <div>
        <div  className="d-flex justify-content-center align-items-center"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "green",
            color:"white",
            borderRadius: "50%",
          }}>
          <i style={{   color:"white",}}class="fa-solid fa-motorcycle"></i>
        </div>
       <div  className="text-center">
      
       <h1>Delivered</h1>
       </div>
      </div>
    </div>
  );
}

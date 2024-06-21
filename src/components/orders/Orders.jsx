import React, { useContext } from 'react';
import { context } from "../context/Context";
import noorders from "../Cart/empty-cart-2130356-1800917.webp";
import { useNavigate } from 'react-router-dom';
import orderPlacedimage from "./order_success_placed.gif"
import "./Orders.css"
export default function Orders() {
  const { orderPlaced } = useContext(context);
  let navigatetohome = useNavigate()
  const ordernavigatetohome = () =>{
    navigatetohome("/") 
  }
 return (
    <div className='container d-flex flex-column justify-content-center align-items-center text-center' style={{ height: "80vh" }}>
      {orderPlaced ? (
        <>
          <h1>Order Placed</h1>
          <p className='fs-4 mt-2'>Our delivery partner will reach you in short time</p>
          <i className="fa-solid fa-check" style={{ color: "green" }}> </i>
        </>
      ) : (
        <div className='d-flex align-items-center noorders-div'>
          <div>
          <p className='fs-1'>No orders Yet</p>
          <p className='fs-5 mt-3'>No orders found kindly go to home and place your order</p> 
          <button className='btn btn-warning mt-1' onClick={ordernavigatetohome}>Home</button> 
          </div>
          <img className="noorderimage"src={noorders} alt="" /> 
          </div>
       )}
    </div>
  );
}

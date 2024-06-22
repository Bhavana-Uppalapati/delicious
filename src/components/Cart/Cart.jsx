import React, { useContext, useState } from "react";
import { context } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './cart.css';
import emptycart from "./empty-cart-1.jpg";
import Swal from 'sweetalert2'
import { ElementsConsumer,CardElement } from "@stripe/react-stripe-js";
import { useStripe,useElements } from "@stripe/react-stripe-js";

export default function Cart() {
  const { cartlist, setCartlist, count, setCount, userName, orderPlaced, setOrderPlaced,stripepromise } = useContext(context);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const navigate = useNavigate();

  const removeFromCart = (menuidToRemove) => {
    let filtered_cart = cartlist.filter((arr) => arr[0].menuid !== menuidToRemove);
    setCartlist(filtered_cart);
    setCount(count - 1);
  };

  const handleChange = (id1) => {
    let updatedData = cartlist.map((arr) =>
      arr.map((obj) => (id1 === obj.menuid ? { ...obj, quantity: obj.quantity + 1 } : obj))
    );
    setCartlist(updatedData);
  };

  const handleChangeDec = (id1) => {
    let updatedData = cartlist.map((arr) =>
      arr.map((obj) => (id1 === obj.menuid && obj.quantity > 1 ? { ...obj, quantity: obj.quantity - 1 } : obj))
    );
    setCartlist(updatedData);
  };

  const handlePrice = () => {
    let total = 0;
    cartlist.flat().forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const checkLogin = () => {
    if (userName === "") {
      navigate("/");
      toast("please login");
    }
  };

  const handleOrder = () => {
    if (cartlist.length === 0) {
      toast("please add items");
      navigate("/");
    } else {
      setShowOrderDetails(true);
    }
    
    setTimeout(()=>{
      navigate("/payment")
    },100)
   
  };

  const emptyCart = () => {
    setCartlist([]);
  };

  const handlePayment = () => {
    setShowPaymentForm(true);
    setShowOrderDetails(false);
  };

  const handlePaymentSubmit =async (e) => {
    e.preventDefault();
    // handle payment logic here
    setShowPaymentForm(false);
    setCartlist([]);
    setOrderPlaced(true);
    // const {stripe,elements} = stripepromise
    // if(!stripe || !elements ) return;
    // const card = elements.getElement(CardElement) 
    // const result = await stripe.createToken(card) 
    // if(result.error){
    //   console.log(result.error.message)   
    // }else{
    //   console.log(result.token)
    // }
    // toast("Payment successful!");
    // navigate("/Orders");
    // const swalWithBootstrapButtons = Swal.mixin({
    //   customClass: {
    //     confirmButton: "btn btn-success",
    //     cancelButton: "btn btn-danger"
    //   },
    //   buttonsStyling: false
    // });
    // swalWithBootstrapButtons.fire({
    //   title: "Are you sure?",
    //   text: "You want to place the order!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonText: "Yes confirm!",
    //   cancelButtonText: "No, cancel!",
    //   reverseButtons: true
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     swalWithBootstrapButtons.fire({
    //       title: "placed!",
    //       text: "Your order has been placed.",
    //       icon: "success"
    //     });
    //   } else if (
    //     /* Read more about handling dismissals below */
    //     result.dismiss === Swal.DismissReason.cancel
    //   ) {
    //     swalWithBootstrapButtons.fire({
    //       title: "Cancelled",
    //       text: "Your order is cancelled :)",
    //       icon: "error"
    //     });
    //   }
    // });
  };

  const navigatetohome = () => {
    navigate("/");
  };

  const new_list = cartlist.flat();

  return (
    <>
  
    <div>

    </div>
      {new_list.length ? (
        <div className="cart-main-div">
          {new_list.map((arr) => (
            <div key={arr.menuid} className="mt-5 cartdiv">
              <p className="fs-4 name">{arr.name}</p>
              <p className="fs-4 price">{arr.price}</p> 
              <button className="decbtn" style={{ background: "transparent", border: "none" }} onClick={() => handleChangeDec(arr.menuid)}>
                <p className="fs-3">-</p>
              </button>
              <p className="fs-4 quantity">{arr.quantity}</p>
              <button className="incbtn" style={{ background: "transparent", border: "none" }} onClick={() => handleChange(arr.menuid)}>
                <p className="fs-3">+</p>
              </button>
              <button className="deletebtn" style={{ background: "transparent", border: "none" }} onClick={() => removeFromCart(arr.menuid)}>
                <i className="fa-solid fa-trash fs-4 mb-3"></i>
              </button> 
            </div>
          ))}
          <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <button onClick={handleOrder} className="btn btn-warning">Order</button> 
            <p className="mt-3 fs-3">total: {handlePrice()}</p>
          </div>
        </div> 
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"100%"}}> 
          <img style={{width:"40vw"}} src={emptycart} alt="" />
          <p className="text-center fs-5">your cart is empty</p>
          <button className="btn btn-warning" onClick={navigatetohome}>Search Your favourite restaurants</button>
        </div>
      )}
      
<div className="text-center mt-5">
        {showOrderDetails && (
          <div className="popup">
            <button id="close" onClick={() => setShowOrderDetails(false)}>&times;</button>
            <p>items</p>
            {new_list.map((data) => (
              <p key={data.menuid} className="fs-4">{data.name}</p>
            ))}
            <p>Order total</p>
            <p className="fs-6">{handlePrice()}</p>
            <button className="btn btn-warning" onClick={handlePayment}>pay now</button>
          </div>
        )}
      </div> 
      {showPaymentForm && (
        <div className="payment-form">
          <form onSubmit={handlePaymentSubmit}>
            <h3>Payment Details</h3>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" name="Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" name="expiryDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
            <button type="submit" className="btn btn-success" >Submit Payment</button> 
          </form>
        </div>
      )}
    </>
  );
}
//  export function stripeitegration(){ 
//   return (
//     <ElementsConsumer>
//       {({ stripe, elements }) => (
//         <Cart stripe={stripe} elements={elements} />
//       )}
//     </ElementsConsumer>
//   );
//  }
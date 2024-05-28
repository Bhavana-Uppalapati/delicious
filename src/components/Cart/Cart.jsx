import React, { useContext, useState } from "react";
import { context } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './cart.css'

export default function Cart() {
  const { cartlist, setCartlist, count, setCount, userName } = useContext(context);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
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
    checkLogin();
    if (cartlist.length === 0) {
      toast("please add items");
      navigate("/");
    } else {
      setShowOrderDetails(true);
    }
  };

  const emptyCart = () => {
    setCartlist([]);
  };

  const new_list = cartlist.flat();

  return (
    <>
      {new_list.length ? (
        new_list.map((arr) => (
          <div key={arr.menuid} className="d-flex justify-content-evenly align-items-center mt-5">
            <p className="fs-4">{arr.name}</p>
            <p className="fs-4">{arr.price}</p>
            <button style={{ background: "transparent", border: "none" }} onClick={() => handleChangeDec(arr.menuid)}>
              <p className="fs-3">-</p>
            </button>
            <p className="fs-4">{arr.quantity}</p>
            <button style={{ background: "transparent", border: "none" }} onClick={() => handleChange(arr.menuid)}>
              <p className="fs-3">+</p>
            </button>
            <button style={{ background: "transparent", border: "none" }} onClick={() => removeFromCart(arr.menuid)}>
              <i className="fa-solid fa-trash fs-4"></i>
            </button>
          </div>
        ))
      ) : (
        <p className="text-center mt-5 pt-5">cart is empty</p>
      )}

      <div className="text-center mt-5">
        <button onClick={handleOrder} className="btn btn-warning">
          Order
        </button>
        <p className="mt-3">total: {handlePrice()}</p>
        {showOrderDetails && (
          <div className="popup">
            <button id="close" onClick={() => setShowOrderDetails(false)}>&times;</button>
            <p>items</p>
            {new_list.map((data) => (
              <p key={data.menuid} className="fs-4">{data.name}</p>
            ))}
            <p>Order total</p>
            <p className="fs-6">{handlePrice()}</p>
            <Link to="/Orders">
              <button className="btn btn-warning" onClick={emptyCart}>pay now</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

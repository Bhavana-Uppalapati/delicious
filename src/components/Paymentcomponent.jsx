import React, { useState } from "react";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import Swal from "sweetalert2";
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const PAYMENT_SUCCESS_URL = "http://localhost:3000/Sucess";

const PaymentForm = () => {
	const { setOrderPlaced } = useContext(context);
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsLoading(true);
        setMessage("Payment in Progress");

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: PAYMENT_SUCCESS_URL,
            },
        });

        if (error) {
            setMessage(error.message || "An unexpected error occurred");
            console.error("Payment error:", error);
            setIsLoading(false);
            return;
        } else {
            setMessage("Payment successful!");
			
            displayConfirmationDialog();
        }
    };

    const displayConfirmationDialog = () => {
		Swal.fire({
			title: "Order Placed",
			text: "Your payment is done!",
			icon: "success"
		  });
      setIsLoading(false);
    };
	const handlepayment = ()=>{
        setOrderPlaced(true)
	}

    return (
        <div className="container d-flex justify-content-center align-items-center text-center ">
            <form onSubmit={handleSubmit}>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h1 className="card-title mb-4">
                             pay here!
                        </h1>
                        <PaymentElement />
                        <div>
                            <button className="btn btn-warning mt-3"
                                disabled={isLoading || !stripe || !elements}
                            >
                                {isLoading ? "Loading..." : "Pay now"} 
                            </button> 
                        </div>
                        {message && <div>{message}</div>} 
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;

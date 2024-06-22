//StripePayment.js

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "./Paymentcomponent";

const stripe = loadStripe('pk_test_51PU0z4P1TthxkHW3hljTgCOCSr2OTlMqSuWhK25rGnkAPgFMLicDplbeTSGUM17sETxqGDTrhO0dnHJ1le3bmeJi00LptDjxON');

const StripePayment = () => {
	const [clientSecret, setClientSecret] = useState(null);

	// useEffect(() => {
	// 	axios
	// 		.post("http://localhost:4000/create-payment-intent", {
	// 			items: [{ id: 1, name: "momos", amount: 40.00 }],
	// 		})
	// 		.then((resp) => setClientSecret(resp.data.clientSecret) );
	// }, []); 
  useEffect(()=>{
        fetch("",{
            method:"POST"
        }).then((res)=>{
            res.json().then((resp)=>{
                setClientSecret(resp.data.clientSecret)
            })
        })
  },[])
	const options = {
		clientSecret,
		theme: "stripe",
	};

	return (
		clientSecret && (
			<Elements stripe={stripe} options={options}>
				<PaymentForm></PaymentForm>
			</Elements>
		)
	);
};

export default StripePayment;

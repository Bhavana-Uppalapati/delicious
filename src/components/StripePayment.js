import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "./Paymentcomponent";

const stripePromise = loadStripe('pk_test_51PU0z4P1TthxkHW3hljTgCOCSr2OTlMqSuWhK25rGnkAPgFMLicDplbeTSGUM17sETxqGDTrhO0dnHJ1le3bmeJi00LptDjxON');

const StripePayment = () => {
	const [clientSecret, setClientSecret] = useState(null);

	useEffect(() => {
		fetch("https://stripe-backend-xzb1.onrender.com/create-payment-intent", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				items: [{ id: 1, name: "momos", amount: 40.00 }]
			})
		})
		.then((res) => res.json())
		.then((data) => {
			setClientSecret(data.clientSecret);
		})
		.catch((error) => {
			console.error("Error fetching client secret:", error);
		});
	}, []);

	const options = {
		clientSecret,
		appearance: {
			theme: 'stripe',
		},
	};

	return (
		clientSecret && (
			<Elements stripe={stripePromise} options={options}>
				<PaymentForm />
			</Elements>
		)
	);
};

export default StripePayment;

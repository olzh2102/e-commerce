import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey =
		'pk_test_NWnk4cQGg7OFWN24hGuy934700imI1nw1i'

	const onToken = token => {
		console.log('token', token)
		alert('Payment was successful')
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name="E-Commerce Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton

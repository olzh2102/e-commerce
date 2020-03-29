import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey =
		'pk_test_NWnk4cQGg7OFWN24hGuy934700imI1nw1i'

	const onToken = async token => {
		try {
			const response = await axios({
				url: 'payment',
				method: 'post',
				data: {
					amount: priceForStripe,
					token
				}
			})

			if (response.success) {
				alert('payment was succesfull')
			}
		} catch (error) {
			console.log(
				'Payment error: ',
				error.message
			)
			alert(
				'There was an issue with your payment'
			)
		}
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

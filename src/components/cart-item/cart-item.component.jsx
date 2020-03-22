import React from 'react'
import {
	CartItemContainer,
	ItemDetails
} from './cart-item.styles'

const CartItem = ({
	item: { imageUrl, price, name, quantity }
}) => (
	<CartItemContainer>
		<img src={imageUrl} alt="image" />
		<ItemDetails>
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</ItemDetails>
	</CartItemContainer>
)

export default CartItem

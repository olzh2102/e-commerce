import React from 'react'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

import {
	CartDropdownContainer,
	CartDropdownButton,
	EmptyMessageContainer,
	CartItemsContainer
} from './cart-dropdown.styles'

const CartDropdown = ({
	cartItems,
	history,
	dispatch
}) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem
						key={cartItem.id}
						item={cartItem}
					/>
				))
			) : (
				<EmptyMessageContainer>
					Your cart is empty
				</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<CartDropdownButton
			onClick={() => {
				history.push('/checkout')
				dispatch(toggleCartHidden())
			}}
		>
			GO TO CHECKOUT
		</CartDropdownButton>
	</CartDropdownContainer>
)

export default CartDropdown

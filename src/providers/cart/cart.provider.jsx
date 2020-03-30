import React, {
	createContext,
	useState,
	useEffect
} from 'react'

import {
	addItemToCart,
	removeItemFromCart,
	filterItemFromCart,
	getCartItemsCount,
	getTotal
} from './cart.utils'

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItem: [],
	addItem: () => {},
	removeItem: () => {},
	clearItemFromCart: () => {},
	cartItemsCount: 0,
	total: 0
})

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true)
	const [cartItems, setCartItems] = useState([])
	const [total, setTotal] = useState(0)
	const [
		cartItemsCount,
		setCartItemsCount
	] = useState(0)

	const addItem = item =>
		setCartItems(
			addItemToCart(cartItems, item)
		)
	const removeItem = item =>
		setCartItems(
			removeItemFromCart(cartItems, item)
		)
	const clearItemFromCart = item =>
		setCartItems(
			filterItemFromCart(cartItems, item)
		)
	const toggleHidden = () => setHidden(!hidden)

	useEffect(() => {
		setCartItemsCount(
			getCartItemsCount(cartItems)
		)

		setTotal(getTotal(cartItems))
	}, [cartItems, total])

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				cartItemsCount,
				addItem,
				removeItem,
				clearItemFromCart,
				total
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider

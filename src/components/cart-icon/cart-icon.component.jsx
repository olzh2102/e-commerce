import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import CartContext from '../../contexts/cart/cart.context'

import './cart-icon.styles.scss'

const CartIcon = ({ itemCount }) => {
	const { toggleHidden } = useContext(
		CartContext
	)

	return (
		<div
			className="cart-icon"
			onClick={toggleHidden}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">
				{itemCount}
			</span>
		</div>
	)
}

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartIcon)

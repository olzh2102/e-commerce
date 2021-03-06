import React from 'react'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
	CartContainer,
	ShoppingIcon,
	ItemCountContainer,
} from './cart-icon.styles'

export const CartIcon = ({
	toggleCartHidden,
	itemCount,
}) => (
	<CartContainer onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<ItemCountContainer
			children={itemCount}
		/>
	</CartContainer>
)

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
})

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () =>
		dispatch(toggleCartHidden()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartIcon)

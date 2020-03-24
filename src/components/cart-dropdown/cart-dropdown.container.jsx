import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartDropdown from './cart-dropdown.component'

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
})

const CartDropdownContainer = compose(
	connect(mapStateToProps),
	withRouter
)(CartDropdown)

export default CartDropdownContainer

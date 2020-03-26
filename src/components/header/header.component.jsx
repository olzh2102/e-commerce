import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/codesandbox.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container'

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles'

const Header = ({
	currentUser,
	hidden,
	signOutStart
}) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>

		<OptionsContainer>
			<OptionLink to="/shop">
				SHOP
			</OptionLink>
			<OptionLink to="/contact">
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionLink
					as="div"
					onClick={signOutStart}
				>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">
					SIGN IN
				</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{!hidden && <CartDropdownContainer />}
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)

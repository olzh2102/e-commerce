import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/codesandbox.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import CurrentUserContext from '../../contexts/current-user/current-user.context'

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles'

const Header = ({ hidden }) => {
	const currentUser = useContext(
		CurrentUserContext
	)

	return (
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
						onClick={() =>
							auth.signOut()
						}
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
			{!hidden && <CartDropdown />}
		</HeaderContainer>
	)
}
const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/codesandbox.svg'
import CartIcon from '../cart-icon/cart-icon.component'

const Header = ({ currentUser }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>

		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link
				className="option"
				to="/contact"
			>
				CONTACT
			</Link>
			{currentUser ? (
				<div
					className="option"
					onClick={() => auth.signOut()}
				>
					SIGN OUT
				</div>
			) : (
				<Link
					className="option"
					to="/signin"
				>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
	</div>
)

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)

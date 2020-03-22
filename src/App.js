import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selectors'
import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom'
import Container from '@material-ui/core/Container'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'

import { setCurrentUser } from './redux/user/user.actions'

import {
	auth,
	createUserProfileDocument
} from './firebase/firebase.utils'

import './App.css'
class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		const {
			setCurrentUser,
			collectionsArray
		} = this.props

		this.unsubscribeFromAuth = auth.onAuthStateChanged(
			async userAuth => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(
						userAuth
					)

					userRef.onSnapshot(
						snapShot => {
							setCurrentUser({
								currentUser: {
									id:
										snapShot.id,
									...snapShot.data()
								}
							})
						}
					)
				} else {
					setCurrentUser(userAuth)
				}
			}
		)
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<>
				<Header />
				<Container>
					<Switch>
						<Route
							exact
							path="/"
							component={HomePage}
						/>
						<Route
							path="/shop"
							component={ShopPage}
						/>
						<Route
							exact
							path="/checkout"
							component={
								CheckoutPage
							}
						/>
						<Route
							exact
							path="/signin"
							render={() =>
								this.props
									.currentUser ? (
									<Redirect to="/" />
								) : (
									<SignInAndSignUpPage />
								)
							}
						/>
					</Switch>
				</Container>
			</>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user =>
		dispatch(setCurrentUser(user))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

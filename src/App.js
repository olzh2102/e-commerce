import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
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

import './App.css'

const App = ({
	checkUserSession,
	currentUser
}) => {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])

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
						component={CheckoutPage}
					/>
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? (
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

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
	checkUserSession: () =>
		dispatch(checkUserSession())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

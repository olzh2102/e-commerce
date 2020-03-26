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

import './App.css'
class App extends React.Component {
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

export default connect(mapStateToProps)(App)

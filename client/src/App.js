import React, {
	useEffect,
	lazy,
	Suspense,
} from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import {
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Header from './components/header/header.component'

import { GlobalStyle } from './global.styles'

const HomePage = lazy(() =>
	import('./pages/homepage/homepage.component')
)
const ShopPage = lazy(() =>
	import('./pages/shop/shop.component')
)
const SignInAndSignUpPage = lazy(() =>
	import(
		'./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
	)
)
const CheckoutPage = lazy(() =>
	import('./pages/checkout/checkout.component')
)

const App = ({
	checkUserSession,
	currentUser,
}) => {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Container>
				<Switch>
					<Suspense
						fallback={
							<div>Loading...</div>
						}
					>
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
								currentUser ? (
									<Redirect to="/" />
								) : (
									<SignInAndSignUpPage />
								)
							}
						/>
					</Suspense>
				</Switch>
			</Container>
		</div>
	)
}

const mapStateToProps = (state) => ({
	currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () =>
		dispatch(checkUserSession()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

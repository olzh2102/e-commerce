import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(
			user => {
				this.setState({
					currentUser: user
				})
			}
		)
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<>
				<Header
					currentUser={
						this.state.currentUser
					}
				/>
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
							path="/signin"
							component={
								SignInAndSignUpPage
							}
						/>
					</Switch>
				</Container>
			</>
		)
	}
}

export default App

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Container from '@material-ui/core/Container'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

function App() {
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

export default App

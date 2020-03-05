import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Container from '@material-ui/core/Container'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
	return (
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
			</Switch>
		</Container>
	)
}

export default App

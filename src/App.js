import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Container from '@material-ui/core/Container'

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
)

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
					path="/hats"
					component={HatsPage}
				/>
			</Switch>
		</Container>
	)
}

export default App

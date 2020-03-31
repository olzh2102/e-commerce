import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'

import './index.css'
import App from './App'

import {
	resolvers,
	typeDefs
} from './graphql/resolvers'

// establish connection with backend server
const httpLink = createHttpLink({
	uri: 'https://www.crwn-clothing.com' // graphql playground
})

const cache = new InMemoryCache()

const client = new ApolloClient({
	link: httpLink,
	cache,
	typeDefs,
	resolvers
})

client.writeData({
	data: {
		cartHidden: true
	}
})

client
	.query({
		query: gql`
			{
				getCollectionsByTitle(
					title: "Jackets"
				) {
					id
					items {
						collection {
							title
							id
						}
					}
				}
			}
		`
	})
	.then(res =>
		console.log('RES from GRAPHQL: ', res)
	)

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate
					persistor={persistor}
				>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</ApolloProvider>,
	document.getElementById('root')
)

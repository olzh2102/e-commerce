import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Header from './header.component'

const GET_CART_HIDDEN = gql`
	{
		cartHidden @client
		currentUser @client
	}
`

const HeaderContainer = () => (
	<Query query={GET_CART_HIDDEN}>
		{({ data }) => (
			<Header
				hidden={data.cartHidden}
				currentUser={data.currentUser}
			/>
		)}
	</Query>
)

export default HeaderContainer

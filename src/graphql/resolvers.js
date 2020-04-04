import { gql } from 'apollo-boost'
import {
	addItemToCart,
	getCartItemCount,
	getCartTotal,
	removeItemFromCart,
	clearItemFromCart,
} from './cart.utils'

// a-la action types
export const typeDefs = gql`
	extend type Item {
		quantity: Int
	}
	extend type DateTime {
		nanoseconds: Int!
		seconds: Int!
	}

	extend type User {
		id: ID!
		displayName: String!
		email: String!
		createdAt: DateTime!
	}

	extend type Mutation {
		ToggleCartHidden: Boolean!
		AddItemToCart(item: Item): [Item]!
		RemoveItemFromCart(item: Item!): [Item]!
		ClearItemFromCart(item: Item!): [Item]!
		SetCurrentUser(user: User!): User!
	}
`

// a-la actions - all names (lines 19, 25, 31) coming from index.js
const GET_CART_HIDDEN = gql`
	{
		cartHidden @client
	}
`

const GET_CART_ITEMS = gql`
	{
		cartItems @client
	}
`

const GET_ITEM_COUNT = gql`
	{
		itemCount @client
	}
`

const GET_CART_TOTAL = gql`
	{
		cartTotal @client
	}
`

const GET_CURRENT_USER = gql`
	{
		currentUser @client
	}
`

// a-la reducers
export const resolvers = {
	Mutation: {
		toggleCartHidden: (
			_root,
			_args,
			{ cache }
		) => {
			const {
				cartHidden,
			} = cache.readQuery({
				query: GET_CART_HIDDEN,
			})

			cache.writeQuery({
				query: GET_CART_HIDDEN,
				data: { cartHidden: !cartHidden },
			})

			return !cartHidden
		},

		addItemToCart: (
			__root,
			{ item },
			{ cache }
		) => {
			const { cartItems } = cache.readQuery(
				{
					query: GET_CART_ITEMS,
				}
			)

			const newCartItems = addItemToCart(
				cartItems,
				item
			)

			cache.writeQuery({
				query: GET_ITEM_COUNT,
				data: {
					itemCount: getCartItemCount(
						newCartItems
					),
				},
			})

			cache.writeQuery({
				query: GET_CART_TOTAL,
				data: {
					cartTotal: getCartTotal(
						newCartItems
					),
				},
			})

			cache.writeQuery({
				query: GET_CART_ITEMS,
				data: { cartItems: newCartItems },
			})

			return newCartItems
		},

		removeItemFromCart: (
			_root,
			{ item },
			{ cache }
		) => {
			const { cartItems } = cache.readQuery(
				{
					query: GET_CART_ITEMS,
				}
			)

			const newCartItems = removeItemFromCart(
				cartItems,
				item
			)

			cache.writeQuery({
				query: GET_ITEM_COUNT,
				data: {
					itemCount: getCartItemCount(
						newCartItems
					),
				},
			})

			cache.writeQuery({
				query: GET_CART_TOTAL,
				data: {
					cartTotal: getCartTotal(
						newCartItems
					),
				},
			})

			cache.writeQuery({
				query: GET_CART_ITEMS,
				data: { cartItems: newCartItems },
			})

			return newCartItems
		},

		clearItemFromCart: (
			_root,
			{ item },
			{ cache }
		) => {
			const { cartItems } = cache.readQuery(
				{
					query: GET_CART_ITEMS,
				}
			)

			const newCartItems = clearItemFromCart(
				cartItems,
				item
			)

			cache.writeQuery({
				query: GET_ITEM_COUNT,
				data: {
					itemCount: getCartItemCount(
						newCartItems
					),
				},
			})

			cache.writeQuery({
				query: GET_CART_TOTAL,
				data: {
					cartTotal: getCartTotal(
						newCartItems
					),
				},
			})

			cache.writeQuery({
				query: GET_CART_ITEMS,
				data: { cartItems: newCartItems },
			})

			return newCartItems
		},

		setCurrentUser: (
			_root,
			{ user },
			{ cache }
		) => {
			cache.writeQuery({
				query: GET_CURRENT_USER,
				data: { currentUser: user },
			})

			return user
		},
	},
}

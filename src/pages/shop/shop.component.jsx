import React from 'react'
import { Route } from 'react-router-dom'
import CategoryPage from '../../pages/category/category.component'
import CollectionsOverview from '../../components/colections-overview/collections-overview.component'

const ShopPage = ({ match }) => {
	console.log('match', match)
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverview}
			/>
			<Route
				path={`${match.path}/:categoryId`}
				component={CategoryPage}
			/>
		</div>
	)
}
export default ShopPage

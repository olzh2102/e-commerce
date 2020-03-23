import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/colections-overview/collections-overview.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectCollectionFetching } from '../../redux/shop/shop.selectors'

const CollectionPageWithSpinner = WithSpinner(
	CollectionPage
)
const CollectionsOverviewWithSpinner = WithSpinner(
	CollectionsOverview
)

class ShopPage extends React.Component {
	componentDidMount() {
		const {
			fetchCollectionsStartAsync
		} = this.props
		fetchCollectionsStartAsync()
	}

	render() {
		const {
			match,
			isCollectionFetching
		} = this.props

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewWithSpinner
							isLoading={
								isCollectionFetching
							}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={
								isCollectionFetching
							}
							{...props}
						/>
					)}
				/>
			</div>
		)
	}
}

const matStateToProps = createStructuredSelector({
	isCollectionFetching: selectCollectionFetching
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () =>
		dispatch(fetchCollectionsStartAsync())
})

export default connect(
	matStateToProps,
	mapDispatchToProps
)(ShopPage)

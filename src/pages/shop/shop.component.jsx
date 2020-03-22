import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/colections-overview/collections-overview.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { updateCollections } from '../../redux/shop/shop.actions'

import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

const CollectionPageWithSpinner = WithSpinner(
	CollectionPage
)
const CollectionsOverviewWithSpinner = WithSpinner(
	CollectionsOverview
)

class ShopPage extends React.Component {
	state = {
		loading: true
	}

	unsubscribeFromSnapshot = null

	componentDidMount() {
		const { updateCollections } = this.props

		const collectionRef = firestore.collection(
			'collections'
		)

		collectionRef.onSnapshot(
			async snapshot => {
				console.log('SNAPSHOT', snapshot)
				const collectionsMap = convertCollectionsSnapshotToMap(
					snapshot
				)

				updateCollections(collectionsMap)

				this.setState({ loading: false })
			}
		)
	}

	render() {
		const { match } = this.props
		const { loading } = this.state

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(
			updateCollections(collectionsMap)
		)
})

export default connect(
	null,
	mapDispatchToProps
)(ShopPage)

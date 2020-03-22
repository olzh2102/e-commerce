import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/colections-overview/collections-overview.component'

import { updateCollections } from '../../redux/shop/shop.actions'

import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'
class ShopPage extends React.Component {
	constructor() {
		super()
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
			}
		)
	}

	render() {
		const { match } = this.props
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={
						CollectionsOverview
					}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
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

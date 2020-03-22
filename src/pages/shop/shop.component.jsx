import React from 'react'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/colections-overview/collections-overview.component'

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
		const collectionRef = firestore.collection(
			'collections'
		)

		collectionRef.onSnapshot(
			async snapshot => {
				console.log('SNAPSHOT', snapshot)
				convertCollectionsSnapshotToMap(
					snapshot
				)
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

export default ShopPage

import ShopActionTypes from './shop.types'
import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
	type:
		ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
})

export const fecthCollectionsFailure = errorMessage => ({
	type:
		ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
	return async dispatch => {
		try {
			const collectionRef = firestore.collection(
				'collections'
			)
			dispatch(fetchCollectionsStart())

			const snapshot = await collectionRef.get()
			const collectionsMap = convertCollectionsSnapshotToMap(
				snapshot
			)
			dispatch(
				fetchCollectionsSuccess(
					collectionsMap
				)
			)
		} catch (error) {
			dispatch(
				fecthCollectionsFailure(
					error.message
				)
			)
		}
	}
}

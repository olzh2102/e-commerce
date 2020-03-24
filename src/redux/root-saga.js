import { all, call } from 'redux-saga/effects'

import { fetchCollectionsStart } from '../redux/shop/shop.sagas'

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart)])
}

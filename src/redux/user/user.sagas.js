import {
	takeLatest,
	put,
	all,
	call
} from 'redux-saga/effects'

import { UserActionTypes } from './user.types'

import {
	googleProvider,
	auth,
	createUserProfileDocument
} from '../../firebase/firebase.utils'

export function* signInWithGoogle() {
	try {
		const userRef = yield auth.signInWithPopup(
			googleProvider
		)
		console.log('userref:', userRef)
	} catch (error) {}
}

export function* onGoogleSignInStart() {
	yield takeLatest(
		UserActionTypes.GOOGLE_SIGN_IN_START,
		signInWithGoogle
	)
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart)])
}

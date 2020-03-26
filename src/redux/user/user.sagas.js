import {
	takeLatest,
	put,
	all,
	call
} from 'redux-saga/effects'

import { UserActionTypes } from './user.types'
import {
	signInSuccess,
	signInFailure
} from './user.actions'

import {
	googleProvider,
	auth,
	createUserProfileDocument
} from '../../firebase/firebase.utils'

export function* signInWithGoogle() {
	try {
		const {
			user
		} = yield auth.signInWithPopup(
			googleProvider
		)
		const userRef = yield call(
			createUserProfileDocument,
			user
		)
		const userSnapshot = yield userRef.get()

		yield put(
			signInSuccess({
				id: userSnapshot.id,
				...userSnapshot.data()
			})
		)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(
		UserActionTypes.GOOGLE_SIGN_IN_START,
		signInWithGoogle
	)
}

export function* singInWithEmail({
	payload: { email, password }
}) {
	try {
		const {
			user
		} = yield auth.signInWithEmailAndPassword(
			email,
			password
		)
		const userRef = yield call(
			createUserProfileDocument,
			user
		)
		const userSnapshot = yield userRef.get()

		yield put(
			signInSuccess({
				id: userSnapshot.id,
				...userSnapshot.data()
			})
		)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(
		UserActionTypes.EMAIL_SIGN_IN_START,
		singInWithEmail
	)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart)
	])
}

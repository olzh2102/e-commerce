import {
	takeLatest,
	put,
	all,
	call
} from 'redux-saga/effects'

import { UserActionTypes } from './user.types'
import {
	signInSuccess,
	signInFailure,
	signOutFailure,
	signOutSuccess,
	signUpFailure
} from './user.actions'

import {
	googleProvider,
	auth,
	createUserProfileDocument,
	getCurrentUser
} from '../../firebase/firebase.utils'

export function* getSnapshotFromUserAuth(
	userAuth,
	additionalData
) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
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

// sagas related to GOOGLE SIGN IN
export function* signInWithGoogle() {
	try {
		const {
			user
		} = yield auth.signInWithPopup(
			googleProvider
		)
		yield getSnapshotFromUserAuth(user)
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

// sagas related to SIGN IN
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
		yield getSnapshotFromUserAuth(user)
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

// sagas related to USER SESSION
export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser()

		if (!userAuth) return

		yield getSnapshotFromUserAuth(userAuth)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onCheckUserSession() {
	yield takeLatest(
		UserActionTypes.CHECK_USER_SESSION,
		isUserAuthenticated
	)
}

// sagas related to SIGN OUT
export function* signOut() {
	try {
		yield auth.signOut()
		yield put(signOutSuccess())
	} catch (error) {
		yield put(signOutFailure(error))
	}
}

export function* onSignOutStart() {
	yield takeLatest(
		UserActionTypes.SIGN_OUT_START,
		signOut
	)
}

// sagas related to SIGN UP
export function* signUp({
	payload: { displayName, email, password }
}) {
	try {
		const {
			user
		} = yield auth.createUserWithEmailAndPassword(
			email,
			password
		)

		yield put(
			signInSuccess({
				user,
				additionalData: { displayName }
			})
		)
	} catch (error) {
		yield put(signUpFailure(error))
	}
}

export function* signInAfterSignUp({
	payload: { user, additionalData }
}) {
	yield getSnapshotFromUserAuth(
		user,
		additionalData
	)
}

export function* onSignUpStart() {
	yield takeLatest(
		UserActionTypes.SIGN_UP_START,
		signUp
	)
}

export function* onSignUpSuccess() {
	yield takeLatest(
		UserActionTypes.SIGN_UP_SUCCESS,
		signInAfterSignUp
	)
}

// collection all sagas
export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(isUserAuthenticated),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess)
	])
}

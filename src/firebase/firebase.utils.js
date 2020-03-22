import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey:
		'AIzaSyB-qjRBgzSINLFUEWKZYQpDQTsgETI4Oqg',
	authDomain:
		'e-commerce-fc3b7.firebaseapp.com',
	databaseURL:
		'https://e-commerce-fc3b7.firebaseio.com',
	projectId: 'e-commerce-fc3b7',
	storageBucket: 'e-commerce-fc3b7.appspot.com',
	messagingSenderId: '107136796974',
	appId:
		'1:107136796974:web:ad2f220e4df875aee092bf'
}

export const createUserProfileDocument = async (
	userAuth,
	additionalData
) => {
	if (!userAuth) return

	const userRef = firestore.doc(
		`users/${userAuth.uid}`
	)
	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log(
				'Error creating user',
				error.message
			)
		}
	}

	return userRef
}

export const addCollectionAndDocuments = (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(
		collectionKey
	)
	console.log('collectionRef', collectionRef)
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account'
})
export const signInWithGoogle = () =>
	auth.signInWithPopup(provider)

export default firebase

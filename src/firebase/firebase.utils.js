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

import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/user.actions'
import './sign-in.styles.scss'

const SignIn = ({
	emailSignInStart,
	googleSignInStart
}) => {
	const [
		userCredentials,
		setUserCredentials
	] = useState({ email: '', password: '' })

	const { email, password } = userCredentials

	const handleSubmit = async e => {
		e.preventDefault()

		emailSignInStart(email, password)
	}

	const handleChange = e => {
		const { value, name } = e.target
		setUserCredentials({
			...userCredentials,
			[name]: value
		})
	}

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>
				Sign In with your email and
				password
			</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					handleChange={handleChange}
					value={email}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					handleChange={handleChange}
					value={password}
					label="Password"
					required
				/>

				<div className="buttons">
					<CustomButton type="submit">
						Sign In
					</CustomButton>
					<CustomButton
						type="button"
						onClick={
							googleSignInStart
						}
						isGoogleSignIn
					>
						Sign In With GOOGLE
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () =>
		dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(
			emailSignInStart({ email, password })
		)
})

export default connect(
	null,
	mapDispatchToProps
)(SignIn)

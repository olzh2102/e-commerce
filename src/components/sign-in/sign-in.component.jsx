import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {
	auth,
	signInWithGoogle
} from '../../firebase/firebase.utils'
import './sign-in.styles.scss'
import { getElementError } from '@testing-library/react'

class SignIn extends React.Component {
	constructor() {
		super()

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async e => {
		e.preventDefault()

		const { email, password } = this.state

		try {
			await auth.signInWithEmailAndPassword(
				email,
				password
			)
			this.setState({
				email: '',
				password: ''
			})
		} catch (error) {
			console.log(error)
		}
	}

	handleChange = e => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>
					Sign In with your email and
					password
				</span>

				<form
					onSubmit={this.handleSubmit}
				>
					<FormInput
						type="email"
						name="email"
						handleChange={
							this.handleChange
						}
						value={this.state.email}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						handleChange={
							this.handleChange
						}
						value={
							this.state.password
						}
						label="Password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">
							Sign In
						</CustomButton>
						<CustomButton
							onClick={
								signInWithGoogle
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
}

export default SignIn

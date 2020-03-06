import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends React.Component {
	constructor() {
		super()

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({ email: '', password: '' })
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

					<CustomButton type="submit">
						Sign In
					</CustomButton>
					<CustomButton
						onClick={signInWithGoogle}
					>
						Sign In With GOOGLE
					</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignIn

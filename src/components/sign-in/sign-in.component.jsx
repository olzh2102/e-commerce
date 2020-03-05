import React from 'react'

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
					<input
						type="email"
						name="email"
						onChange={
							this.handleChange
						}
						value={this.state.email}
						required
					/>
					<label>Email</label>
					<input
						type="password"
						name="password"
						onChange={
							this.handleChange
						}
						value={
							this.state.password
						}
						required
					/>
					<label>Password</label>

					<input
						type="submit"
						value="Submit form"
					/>
				</form>
			</div>
		)
	}
}

export default SignIn

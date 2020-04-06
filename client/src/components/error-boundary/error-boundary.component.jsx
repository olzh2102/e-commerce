import React, { Component } from 'react'

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from './error-boundary.styles'
class ErrorBoundary extends Component {
	state = {
		hasErrored: false,
	}

	static getDerivedStateFromError(error) {
		// process the error
		return { hasErrored: true } // to be aware about error in any children component
	}

	componentDidCatch(error, info) {
		console.log(error)
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer
						imageUrl={
							'https://i.imgur.com/A040Lxr.png'
						}
					/>
					<ErrorImageText>
						Soooooorry, this page
						seems broken
					</ErrorImageText>
				</ErrorImageOverlay>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary

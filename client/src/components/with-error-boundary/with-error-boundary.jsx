import React, { Component } from 'react'

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from './with-error-boundary.styles'

export const withErrorBoundary = (
	WrappedComponent
) =>
	class extends Component {
		state = {
			hasErrored: false,
		}

		static getDerivedStateFromError(error) {
			// process the error
			return { hasErrored: true }
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

			return (
				<WrappedComponent
					{...this.props}
				/>
			)
		}
	}

export default withErrorBoundary

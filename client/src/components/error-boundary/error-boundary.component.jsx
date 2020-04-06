import React, { Component } from 'react'

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
			return <div>Something went wrong</div>
		}

		return this.props.children
	}
}

export default ErrorBoundary

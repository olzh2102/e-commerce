import React from 'react'
import './homepage.styles.scss'
import Card from '@material-ui/core/Card'

const HomePage = () => (
	<div className="homepage">
		<div className="directory-menu">
			<Card
				className="menu-item"
				variant="outlined"
			>
				<div className="content">
					<h1 className="title">
						HATS
					</h1>
					<span className="subtitle">
						SHOP NOW
					</span>
				</div>
			</Card>

			<Card
				className="menu-item"
				variant="outlined"
			>
				<div className="content">
					<h1 className="title">
						JACKETS
					</h1>
					<span className="subtitle">
						SHOP NOW
					</span>
				</div>
			</Card>

			<Card
				className="menu-item"
				variant="outlined"
			>
				<div className="content">
					<h1 className="title">
						SNEAKERS
					</h1>
					<span className="subtitle">
						SHOP NOW
					</span>
				</div>
			</Card>

			<Card
				className="menu-item"
				variant="outlined"
			>
				<div className="content">
					<h1 className="title">
						WOMEN
					</h1>
					<span className="subtitle">
						SHOP NOW
					</span>
				</div>
			</Card>

			<Card
				className="menu-item"
				variant="outlined"
			>
				<div className="content">
					<h1 className="title">MEN</h1>
					<span className="subtitle">
						SHOP NOW
					</span>
				</div>
			</Card>
		</div>
	</div>
)

export default HomePage

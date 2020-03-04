import React from 'react'
import Card from '@material-ui/core/Card'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
	<Card
		className={`${size} menu-item`}
		variant="outlined"
		style={{
			backgroundImage: `url(${imageUrl})`
		}}
	>
		<div className="content">
			<h1 className="title">{title}</h1>
			<span className="subtitle">
				SHOP NOW
			</span>
		</div>
	</Card>
)

export default MenuItem

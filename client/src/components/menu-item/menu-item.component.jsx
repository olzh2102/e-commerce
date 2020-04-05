import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import './menu-item.styles.scss'

const MenuItem = ({
	title,
	imageUrl,
	size,
	history,
	linkUrl,
	match,
}) => (
	<Card
		className={`${size} menu-item`}
		variant="outlined"
		onClick={() =>
			history.push(`${match.url}${linkUrl}`)
		}
	>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className="content">
			<h1 className="title">
				{title.toUpperCase()}
			</h1>
			<span className="subtitle">
				SHOP NOW
			</span>
		</div>
	</Card>
)

export default withRouter(MenuItem)

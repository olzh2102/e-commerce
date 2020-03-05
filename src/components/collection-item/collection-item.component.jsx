import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import './collection-item.styles.scss'

const useStyles = makeStyles(theme => ({
	name: {
		fontSize: 16
	}
}))

const CollectionItem = ({
	id,
	name,
	price,
	imageUrl
}) => {
	const classes = useStyles()
	return (
		<Card
			className="collection-item"
			variant="outlined"
		>
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">
					{name}
				</span>
				<span className="price">
					{price}
				</span>
			</div>
		</Card>
	)
}

export default CollectionItem

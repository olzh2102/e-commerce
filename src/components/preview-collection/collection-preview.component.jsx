import React from 'react'
import { default as CollectionItem } from '../collection-item/collection-item.container'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import './collection-preview.styles.scss'

const CollectionPreview = ({
	title,
	items,
	match,
}) => {
	const history = useHistory()
	return (
		<div className="collection-preview">
			<h1
				className="title"
				onClick={() =>
					history.push(
						`shop/${title.toLowerCase()}`
					)
				}
			>
				{title.toUpperCase()}
			</h1>

			<Grid
				className="preview"
				container
				spacing={2}
			>
				{items
					.filter(
						(item, index) => index < 4
					)
					.map((item) => (
						<Grid item xs={6} sm={3}>
							<CollectionItem
								key={item.id}
								item={item}
							/>
						</Grid>
					))}
			</Grid>
		</div>
	)
}

export default CollectionPreview

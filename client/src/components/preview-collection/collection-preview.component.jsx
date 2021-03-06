import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import './collection-preview.styles.scss'

const CollectionPreview = ({
	title,
	items,
	routeName
}) => {
	const history = useHistory()
	return (
		<div className="collection-preview">
			<h1
				className="title"
				onClick={() =>
					history.push(
						`shop/${routeName}`
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
					.map(item => (
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

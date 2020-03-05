import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import Grid from '@material-ui/core/Grid'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">
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
				.map(({ id, ...itemProps }) => (
					<Grid item xs={6} sm={3}>
						<CollectionItem
							key={id}
							{...itemProps}
						/>
					</Grid>
				))}
		</Grid>
	</div>
)

export default CollectionPreview

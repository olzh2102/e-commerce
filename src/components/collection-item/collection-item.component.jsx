import React from 'react'
import Card from '@material-ui/core/Card'
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({
	id,
	name,
	price,
	imageUrl
}) => {
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
			<CustomButton>
				Add to cart
			</CustomButton>
		</Card>
	)
}

export default CollectionItem

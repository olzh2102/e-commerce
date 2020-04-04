import React from 'react'
import Card from '@material-ui/core/Card'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
	const { imageUrl, name, price } = item
	return (
		<Card
			className="collection-item"
			variant="outlined"
		>
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">
					{name}
				</span>
				<span className="price">
					${price}
				</span>
			</div>
			<CustomButton
				inverted
				onClick={() => addItem(item)}
			>
				Add to cart
			</CustomButton>
		</Card>
	)
}

export default CollectionItem

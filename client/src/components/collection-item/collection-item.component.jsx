import React from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.actions'
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
					backgroundImage: `url(${imageUrl})`
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

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem)

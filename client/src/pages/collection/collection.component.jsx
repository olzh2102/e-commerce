import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles'

const CollectionPage = ({
	collection: { title, items }
}) => (
	<CollectionPageContainer>
		<CollectionTitle>{title}</CollectionTitle>
		<CollectionItemsContainer>
			{items.map(item => (
				<CollectionItem
					key={item.id}
					item={item}
				/>
			))}
		</CollectionItemsContainer>
	</CollectionPageContainer>
)

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(
		ownProps.match.params.collectionId
	)(state)
})

export default connect(mapStateToProps)(
	CollectionPage
)

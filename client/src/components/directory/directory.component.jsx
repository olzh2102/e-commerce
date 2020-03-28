import React from 'react'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(
			({ id, ...sectionProps }) => (
				<MenuItem
					{...sectionProps}
					key={id}
				/>
			)
		)}
	</div>
)

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
	constructor() {
		super()

		this.state = {
			sections: [
				{
					title: 'hats',
					id: 1,
					imageUrl:
						'https://i.ibb.co/cvpntL1/hats.png'
				},
				{
					title: 'jackets',
					id: 2,
					imageUrl:
						'https://i.ibb.co/px2tCc3/jackets.png'
				},
				{
					title: 'sneakers',
					id: 3,
					imageUrl:
						'https://i.ibb.co/0jqHpnp/sneakers.png'
				},
				{
					title: 'women',
					size: 'large',
					id: 4,
					imageUrl:
						'https://i.ibb.co/GCCdy8t/womens.png'
				},
				{
					title: 'men',
					size: 'large',
					id: 5,
					imageUrl:
						'https://i.ibb.co/R70vBrQ/men.png'
				}
			]
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(
					({
						title,
						imageUrl,
						size,
						id
					}) => (
						<MenuItem
							title={title}
							imageUrl={imageUrl}
							size={size}
							key={id}
						/>
					)
				)}
			</div>
		)
	}
}

export default Directory

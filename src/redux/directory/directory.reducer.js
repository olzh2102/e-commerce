const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			id: 1,
			linkUrl: 'hats',
			imageUrl:
				'https://i.ibb.co/cvpntL1/hats.png'
		},
		{
			title: 'jackets',
			id: 2,
			linkUrl: '',
			imageUrl:
				'https://i.ibb.co/px2tCc3/jackets.png'
		},
		{
			title: 'sneakers',
			id: 3,
			linkUrl: '',
			imageUrl:
				'https://i.ibb.co/0jqHpnp/sneakers.png'
		},
		{
			title: 'women',
			size: 'large',
			id: 4,
			linkUrl: '',
			imageUrl:
				'https://i.ibb.co/GCCdy8t/womens.png'
		},
		{
			title: 'men',
			size: 'large',
			id: 5,
			linkUrl: '',
			imageUrl:
				'https://i.ibb.co/R70vBrQ/men.png'
		}
	]
}

const directoryReducer = (
	state = INITIAL_STATE,
	action
) => {
	switch (action.type) {
		default:
			return state
	}
}

export default directoryReducer

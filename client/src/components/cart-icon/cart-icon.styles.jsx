import styled from 'styled-components'

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg'

export const CartContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

CartContainer.displayName = 'CartContainer'

export const ShoppingIcon = styled(
	ShoppingIconSVG
)`
	width: 24px;
	height: 24px;
`

export const ItemCountContainer = styled.span`
	position: absolute;
	font-size: 8px;
	font-weight: bold;
	left: 23px;
`

ItemCountContainer.displayName =
	'ItemCountContainer'

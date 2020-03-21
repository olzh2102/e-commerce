import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	padding: 0 10px;
	justify-content: space-between;
	margin-bottom: 25px;
	background-color: #eef1ef;
`

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 15px 25px;
`

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`

export const OptionDiv = styled.div`
	${OptionContainerStyles}
`

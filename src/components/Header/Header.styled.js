import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledHeader = styled(StyledFlex)`
	padding: 20px;
	border: 2px solid red;
`;

export const Name = styled.span`
	margin-right: 30px;
	font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
	margin-left: 20px;
	text-decoration: none;
`;

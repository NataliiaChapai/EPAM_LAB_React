import styled from 'styled-components';

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

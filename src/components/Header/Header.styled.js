import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledHeader = styled(Flex)`
	padding: 20px;
	border: 2px solid red;
`;

export const Name = styled.span`
	margin-right: 30px;
	font-size: 18px;
`;

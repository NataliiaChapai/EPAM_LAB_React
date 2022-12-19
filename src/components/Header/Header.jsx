import styled from 'styled-components';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledHeader = styled(Flex)`
	padding: 15px;
	border: 2px solid red;
`;

const Name = styled.span`
	margin-right: 30px;
	font-size: 18px;
`;

function Header() {
	return (
		<StyledHeader>
			<Logo></Logo>
			<Flex>
				<Name>Dave</Name>
				<Button buttonText='Logout'></Button>
			</Flex>
		</StyledHeader>
	);
}
export default Header;

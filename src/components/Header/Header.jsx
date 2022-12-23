import { Button } from '../../common';
import { Logo } from './components/Logo';

import { StyledHeader, Flex, Name } from './Header.styled';

export const Header = () => (
	<StyledHeader>
		<Logo></Logo>
		<Flex>
			<Name>Dave</Name>
			<Button buttonText='Logout'></Button>
		</Flex>
	</StyledHeader>
);

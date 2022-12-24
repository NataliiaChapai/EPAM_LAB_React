import { Button } from '../../common';
import { Logo } from './components/Logo';

import { StyledHeader, StyledFlex, Name } from './Header.styled';

export const Header = () => (
	<StyledHeader>
		<Logo></Logo>
		<StyledFlex>
			<Name>Dave</Name>
			<Button buttonText='Logout'></Button>
		</StyledFlex>
	</StyledHeader>
);

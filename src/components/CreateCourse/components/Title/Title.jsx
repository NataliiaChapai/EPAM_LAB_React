import { Input, Button } from '../../../../common';

import { StyledFlex } from '../../../Header/Header.styled';

export const Title = () => (
	<StyledFlex>
		<Input labelText='Title' placeholderText='Enter title...'></Input>
		<Button buttonText='Create course'></Button>
	</StyledFlex>
);

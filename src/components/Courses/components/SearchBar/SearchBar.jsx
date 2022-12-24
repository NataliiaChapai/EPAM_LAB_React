import { Button, Input } from '../../../../common';

import { StyledFlex } from '../../../Header/Header.styled';

export const SearchBar = ({ query, onHandleInputChange, onHandleClick }) => (
	<StyledFlex>
		<Input
			type='text'
			name='search'
			value={query}
			placeholderText='Enter course name or id...'
			onChange={onHandleInputChange}
		></Input>
		<Button buttonText='Search' onClick={onHandleClick}></Button>
	</StyledFlex>
);

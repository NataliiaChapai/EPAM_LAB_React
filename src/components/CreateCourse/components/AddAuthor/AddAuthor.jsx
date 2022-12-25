import { useState } from 'react';
import { Input, Button } from '../../../../common';
import { v4 as uuidv4 } from 'uuid';

import { StyledFlexCenterItem, StyledFlexLeftItem } from './AddAuthor.styled';

export const AddAuthor = ({ onCreateAuthorBtnClick }) => {
	const [author, setAuthor] = useState('');

	const handleInputChange = (event) => {
		const { value } = event.currentTarget;
		setAuthor(value);
	};

	return (
		<StyledFlexCenterItem>
			<h3>Add author</h3>
			<StyledFlexLeftItem>
				<Input
					labelText='Author name'
					placeholderText='Enter author name...'
					onChange={handleInputChange}
				></Input>
			</StyledFlexLeftItem>

			<Button
				buttonText='Create author'
				onClick={() => onCreateAuthorBtnClick({ id: uuidv4(), name: author })}
			></Button>
		</StyledFlexCenterItem>
	);
};

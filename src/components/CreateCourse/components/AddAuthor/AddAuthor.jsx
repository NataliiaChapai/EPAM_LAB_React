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

	const handleClick = (event) => {
		event.preventDefault();
		if (author.length < 2) {
			alert('Author name length should be at least 2 characters');
			return;
		} else {
			onCreateAuthorBtnClick({ id: uuidv4(), name: author });
		}
	};

	return (
		<StyledFlexCenterItem>
			<h3>Add author</h3>
			<StyledFlexLeftItem>
				<Input
					minLength='2'
					labelText='Author name'
					placeholderText='Enter author name...'
					onChange={handleInputChange}
					value={author}
				></Input>
			</StyledFlexLeftItem>

			<Button buttonText='Create author' onClick={handleClick}></Button>
		</StyledFlexCenterItem>
	);
};

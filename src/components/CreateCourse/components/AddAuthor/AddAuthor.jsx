import { useState } from 'react';
import { Input, Button } from '../../../../common';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { StyledFlexCenterItem, StyledFlexLeftItem } from './AddAuthor.styled';
import { useDispatch } from 'react-redux';
import { ADD_AUTHOR } from '../../../../store/authors/actionTypes';

export const AddAuthor = ({ onCreateAuthorBtnClick }) => {
	const [author, setAuthor] = useState('');
	const dispatch = useDispatch();

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
			const payload = { id: uuidv4(), name: author };
			onCreateAuthorBtnClick(payload);
			dispatch({ type: ADD_AUTHOR, payload });
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

AddAuthor.propTypes = {
	onCreateAuthorBtnClick: PropTypes.func.isRequired,
};

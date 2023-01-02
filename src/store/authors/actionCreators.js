import { v4 as uuidv4 } from 'uuid';

import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

export const getAuthors = () => {
	return {
		type: GET_AUTHORS,
	};
};

export const addAuthor = ({ name }) => ({
	type: ADD_AUTHOR,
	payload: {
		id: uuidv4(),
		name,
	},
});

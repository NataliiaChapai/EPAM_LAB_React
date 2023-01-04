import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

export const getAuthors = (authors) => {
	return {
		type: GET_AUTHORS,
		payload: authors,
	};
};

export const addAuthor = ({ id, name }) => ({
	type: ADD_AUTHOR,
	payload: {
		id,
		name,
	},
});

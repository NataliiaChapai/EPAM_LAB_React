import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

export const getAuthors = () => {
	return {
		type: GET_AUTHORS,
	};
};

export const addAuthor = ({ id, name }) => ({
	type: ADD_AUTHOR,
	payload: {
		id,
		name,
	},
});

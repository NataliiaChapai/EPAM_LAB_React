import { ADD_AUTHOR, GET_AUTHORS } from './actionTypes';

const initialState = [];

const authors = (state = initialState, action) => {
	switch (action.type) {
		case GET_AUTHORS:
			return [...action.payload];
		case ADD_AUTHOR:
			return [
				...state,
				{
					id: action.payload.id,
					name: action.payload.name,
				},
			];
		default:
			return state;
	}
};

export default authors;

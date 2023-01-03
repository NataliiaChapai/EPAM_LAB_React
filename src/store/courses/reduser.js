import {
	ADD_COURSE,
	DELETE_COURSE,
	GET_COURSES,
	UPDATE_COURSE,
} from './actionTypes';

const initialState = [];

const courses = (state = initialState, action) => {
	switch (action.type) {
		case GET_COURSES:
			return [...state, ...action.payload];
		case ADD_COURSE:
			return [
				...state,
				{
					id: action.payload.id,
					title: action.payload.title,
					description: action.payload.description,
					duration: action.payload.duration,
					authors: action.payload.authors,
					creationDate: action.payload.creationDate,
				},
			];
		case UPDATE_COURSE:
			return [
				...state.filter((course) => course.id !== action.payload.id),
				{
					...state.find((course) => course.id === action.payload.id),
					title: action.payload.title,
					description: action.payload.description,
					duration: action.payload.duration,
					acthors: action.payload.acthors,
					creationDate: action.payload.creationDate,
				},
			];
		case DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload.id);
		default:
			return state;
	}
};

export default courses;

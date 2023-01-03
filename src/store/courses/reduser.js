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
			return [...action.payload];
		case ADD_COURSE:
			return [...state, action.payload];
		case UPDATE_COURSE:
			return [
				...state.map((course) => {
					if (course.id === action.payload.id) {
						return { ...course, ...action.payload };
					}
					return course;
				}),
			];
		case DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload);
		default:
			return state;
	}
};

export default courses;

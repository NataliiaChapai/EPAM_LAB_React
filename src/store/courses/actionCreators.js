import {
	ADD_COURSE,
	DELETE_COURSE,
	GET_COURSES,
	UPDATE_COURSE,
} from './actionTypes';

export const getCourses = (courses) => ({
	type: GET_COURSES,
	payload: courses,
});

export const addCourse = ({
	id,
	title,
	description,
	duration,
	authors,
	creationDate,
}) => ({
	type: ADD_COURSE,
	payload: {
		id,
		title,
		description,
		duration,
		authors,
		creationDate,
	},
});

export const updateCourse = ({
	id,
	title,
	description,
	duration,
	authors,
}) => ({
	type: UPDATE_COURSE,
	payload: { id, title, description, duration, authors },
});

export const deleteCourse = (id) => ({
	type: DELETE_COURSE,
	payload: id,
});

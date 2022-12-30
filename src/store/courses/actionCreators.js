import { v4 as uuidv4 } from 'uuid';

import { dateGenerator } from '../../helpers/dateGenerator';
import {
	ADD_COURSE,
	DELETE_COURSE,
	GET_COURSES,
	UPDATE_COURSE,
} from './actionTypes';

export const getCourses = () => ({
	type: GET_COURSES,
});

export const addCourse = ({ title, description, duration, authors }) => ({
	type: ADD_COURSE,
	payload: {
		id: uuidv4(),
		title,
		description,
		duration,
		authors,
		creationDate: dateGenerator(new Date(), 'mm/dd/yyyy'),
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

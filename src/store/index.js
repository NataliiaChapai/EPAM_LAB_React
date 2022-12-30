import { combineReducers } from 'redux';
import user from './user/reduser';
import courses from './courses/reduser';
import authors from './authors/reduser';

export default combineReducers({
	user,
	courses,
	authors,
});

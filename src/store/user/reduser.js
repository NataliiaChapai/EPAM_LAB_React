import { LOGIN, LOGOUT } from './actionTypes';

const token = localStorage.getItem('token');

const intitialState = {
	isAuth: token ? true : false,
	token: token ?? '',
	email: '',
	name: '',
	role: '',
};

const user = (state = intitialState, action) => {
	switch (action.type) {
		case LOGIN:
			return action.payload;
		case LOGOUT:
			return intitialState;
		default:
			return state;
	}
};

export default user;

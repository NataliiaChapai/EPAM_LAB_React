import { LOGIN, LOGOUT } from './actionTypes';

const token = localStorage.getItem('token');

const intitialState = {
	isAuth: token ? true : false,
	token: token ?? '',
	email: '',
	name: '',
};

const user = (state = intitialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isAuth: action.payload.isAuth,
				token: action.payload.token,
				email: action.payload.email,
				name: action.payload.name,
			};
		case LOGOUT:
			return intitialState;
		default:
			return state;
	}
};

export default user;

import { LOGIN, LOGOUT } from './actionTypes';

const token = localStorage.getItem('token');
const userData = JSON.parse(localStorage.getItem('user'));

const intitialState = {
	isAuth: token ? true : false,
	token: token ?? '',
	email: userData ? userData.email : '',
	name: userData ? userData.name : '',
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

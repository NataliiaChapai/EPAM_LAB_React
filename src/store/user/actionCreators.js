import { LOGIN, LOGOUT } from './actionTypes';

export const login = ({ token, email, name, isAuth, role }) => ({
	type: LOGIN,
	payload: {
		isAuth,
		token,
		email,
		name,
		role,
	},
});

export const logout = () => ({
	type: LOGOUT,
});

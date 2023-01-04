import { LOGIN, LOGOUT } from './actionTypes';

export const login = ({ token, email, name, isAuth, role }) => ({
	type: LOGIN,
	payload: {
		token,
		email,
		name,
		isAuth,
		role,
	},
});

export const logout = () => ({
	type: LOGOUT,
});

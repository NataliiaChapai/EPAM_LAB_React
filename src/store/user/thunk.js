import { apiLogin, apiLogout, apiUser } from '../../services';
import { currentUser, login, logout } from './actionCreators';

export const loginThunk = ({ email, password }) => {
	return (dispatch) => {
		apiLogin({ email, password }).then((response) => {
			const payload = {
				token: response.result,
				email: response.user.email,
				name: response.user.name,
				isAuth: true,
				role: response.user.email === 'admin@email.com' ? 'admin' : 'user',
			};
			return dispatch(login(payload));
		});
	};
};

export const logoutThunk = () => {
	return (dispatch) => {
		apiLogout().then(() => dispatch(logout()));
	};
};

export const currentUserThunk = () => {
	return (dispatch) => {
		apiUser().then((response) => {
			const payload = {
				email: response.email,
				name: response.name,
				role: response.role,
			};
			return dispatch(currentUser(payload));
		});
	};
};

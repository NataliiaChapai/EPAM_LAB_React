import { apiLogin, apiLogout } from '../../services';
import { login, logout } from './actionCreators';

export const loginThunk = ({ email, password }) => {
	return (dispatch) => {
		apiLogin({ email, password }).then((response) => {
			const payload = {
				token: response.result,
				email: response.user.email,
				name: response.user.name,
				isAuth: true,
				role: response.user.email === 'admin@email.com' ? 'ADMIN' : 'USER',
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

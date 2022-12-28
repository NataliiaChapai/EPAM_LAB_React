import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = token;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const login = (body) =>
	axios
		.post('/login', body)
		.then(({ data: { result, user } }) => {
			localStorage.setItem('token', result);
			localStorage.setItem('user', JSON.stringify(user));
			token.set(result);
		})
		.catch(({ message }) => console.log(message));

export const registration = (body) =>
	axios
		.post('/register', body)
		.then((response) => response)
		.catch(({ message }) => console.log(message));

export const logout = () =>
	axios
		.delete('/logout')
		.then((response) => response)
		.catch(({ message }) => console.log(message));

export const courseInfo = (courseId) =>
	axios
		.get(`/courses/${courseId}`)
		.then(({ data: { result } }) => result)
		.catch(({ message }) => console.log(message));

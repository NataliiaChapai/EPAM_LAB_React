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
			token.set(result);
			return { result, user };
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
		.then(() => token.unset())
		.catch(({ message }) => console.log(message));

export const courseInfo = (courseId) =>
	axios
		.get(`/courses/${courseId}`)
		.then(({ data: { result } }) => result)
		.catch(({ message }) => console.log(message));

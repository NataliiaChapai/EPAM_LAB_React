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

export const apiLogin = (body) =>
	axios
		.post('/login', body)
		.then((response) => {
			if (response.data.result) {
				localStorage.setItem('token', response.data.result);
				token.set(response.data.result);
			}
			return response.data;
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
		.then(() => {
			token.unset();
		})
		.catch(({ message }) => console.log(message));

export const getCourses = () =>
	axios
		.get('/courses/all')
		.then((response) => response.data.result)
		.catch(({ message }) => console.log(message));

export const getAuthors = () =>
	axios
		.get('/authors/all')
		.then((response) => response.data.result)
		.catch(({ message }) => console.log(message));

export const courseInfo = (courseId) =>
	axios
		.get(`/courses/${courseId}`)
		.then(({ data: { result } }) => result)
		.catch(({ message }) => console.log(message));

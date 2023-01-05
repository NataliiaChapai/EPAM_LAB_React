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

if (localStorage.getItem('token')) {
	token.set(localStorage.getItem('token'));
}

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

export const apiRegistration = (body) =>
	axios
		.post('/register', body)
		.then((response) => response)
		.catch(({ message }) => console.log(message));

export const apiLogout = () =>
	axios
		.delete('/logout')
		.then(() => {
			token.unset();
		})
		.catch(({ message }) => console.log(message));

export const apiCourses = () =>
	axios
		.get('/courses/all')
		.then((response) => response.data.result)
		.catch(({ message }) => console.log(message));

export const apiAuthors = () =>
	axios
		.get('/authors/all')
		.then((response) => response.data.result)
		.catch(({ message }) => console.log(message));

export const apiCourseInfo = (courseId) =>
	axios
		.get(`/courses/${courseId}`)
		.then(({ data: { result } }) => result)
		.catch(({ message }) => console.log(message));

export const apiUser = () =>
	axios
		.get('/users/me')
		.then(({ data: { result } }) => result)
		.catch(({ message }) => console.log(message));

import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const login = (body) =>
	axios
		.post(`${BASE_URL}/login`, body)
		.then(({ data: { result } }) => localStorage.setItem('token', result))
		.catch((error) => console.log(error));

export const registration = (body) =>
	axios
		.post(`${BASE_URL}/register`, body)
		.then((response) => response)
		.catch((error) => console.log(error));

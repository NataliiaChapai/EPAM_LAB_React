import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {
	Header,
	CourseInfo,
	Courses,
	CourseForm,
	Login,
	Registration,
} from './components';
import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';

import { Global } from './Global.styled';
import { apiAuthors, apiCourses } from './services';
import { GET_AUTHORS } from './store/authors/actionTypes';
import { GET_COURSES } from './store/courses/actionTypes';

function App() {
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (token) {
			apiAuthors().then((responce) =>
				dispatch({ type: GET_AUTHORS, payload: responce })
			);
			apiCourses().then((response) =>
				dispatch({ type: GET_COURSES, payload: response })
			);
		}
	}, [dispatch, token]);

	return (
		<>
			<Global />
			<Header></Header>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route
					path='/courses/add'
					element={
						<PrivateRoute redirectTo='/courses'>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses' element={<Courses />} />
			</Routes>
		</>
	);
}
export default App;

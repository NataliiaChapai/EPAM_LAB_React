import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {
	Header,
	CourseInfo,
	Courses,
	CreateCourse,
	Login,
	Registration,
} from './components';
import { getAuthors } from './store/authors/actionCreators';
import { apiAuthors, apiCourses } from './services';
import { getCourses } from './store/courses/actionCreators';

import { Global } from './Global.styled';

function App() {
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (token) {
			apiAuthors().then((response) => dispatch(getAuthors(response)));
			apiCourses().then((response) => dispatch(getCourses(response)));
		}
	}, [dispatch, token]);

	return (
		<>
			<Global />
			<Header></Header>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses' element={<Courses />} />
			</Routes>
		</>
	);
}
export default App;

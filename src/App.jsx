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

import { Global } from './Global.styled';
import { getAuthors, getCourses } from './services';
import { GET_AUTHORS } from './store/authors/actionTypes';
import { GET_COURSES } from './store/courses/actionTypes';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		getAuthors().then((responce) =>
			dispatch({ type: GET_AUTHORS, payload: responce })
		);
		getCourses().then((response) =>
			dispatch({ type: GET_COURSES, payload: response })
		);
	}, [dispatch]);

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

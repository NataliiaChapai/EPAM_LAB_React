import { Route, Routes, useNavigate } from 'react-router-dom';

import { Courses, Header } from './components';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { mockedCoursesList } from './components/Courses/mockedCoursesList';

import { Global } from './Global.styled';

function App() {
	const navigate = useNavigate();

	const addNewCourse = () => {
		navigate('/courses/add');
	};

	const createCourse = (course) => {
		if (
			!course.title ||
			course.description.length < 2 ||
			course.duration <= 0 ||
			!course.authors.length
		) {
			alert('Please, fill in all fields');
			return;
		} else {
			mockedCoursesList.push(course);
			navigate('/courses');
		}
	};

	return (
		<>
			<Global />
			<Header></Header>
			<Routes>
				<Route
					path='/courses/add'
					element={<CreateCourse onHandleClick={createCourse} />}
				/>
				<Route
					path='/courses'
					element={
						<Courses courses={mockedCoursesList} onHandleClick={addNewCourse} />
					}
				/>
			</Routes>
		</>
	);
}
export default App;

import { useState } from 'react';

import { Courses, Header } from './components';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { mockedCoursesList } from './components/Courses/mockedCoursesList';

import { Global } from './Global.styled';

function App() {
	const [isCoursesList, setIsCoursesList] = useState(true);

	const addNewCourse = () => {
		setIsCoursesList(!isCoursesList);
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
			setIsCoursesList(!isCoursesList);
			mockedCoursesList.push(course);
		}
	};

	return (
		<>
			<Global />
			<Header></Header>
			{isCoursesList ? (
				<Courses
					courses={mockedCoursesList}
					onHandleClick={addNewCourse}
				></Courses>
			) : (
				<CreateCourse onHandleClick={createCourse}></CreateCourse>
			)}
		</>
	);
}
export default App;

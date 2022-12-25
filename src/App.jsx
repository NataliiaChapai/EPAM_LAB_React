import { useState } from 'react';
import { Courses, Header } from './components';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { Global } from './Global.styled';

function App() {
	const [isCoursesList, setIsCoursesList] = useState(true);

	const addNewCourse = () => {
		setIsCoursesList(!isCoursesList);
	};

	const createCourse = () => {
		setIsCoursesList(!isCoursesList);
	};

	return (
		<>
			<Global />
			<Header></Header>
			{isCoursesList ? (
				<Courses onHandleClick={addNewCourse}></Courses>
			) : (
				<CreateCourse onHandleClick={createCourse}></CreateCourse>
			)}
		</>
	);
}
export default App;

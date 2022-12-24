import { useState } from 'react';
import { Courses, Header } from './components';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { Global } from './Global.styled';

function App() {
	const [isCoursesList, setIsCoursesList] = useState(true);

	const handleClick = () => {
		setIsCoursesList(!isCoursesList);
	};

	return (
		<>
			<Global />
			<Header></Header>
			{isCoursesList ? (
				<Courses onHandleClick={handleClick}></Courses>
			) : (
				<CreateCourse></CreateCourse>
			)}
		</>
	);
}
export default App;

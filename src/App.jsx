import { Courses, Header } from './components';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

import { Global } from './Global.styled';

function App() {
	return (
		<>
			<Global />
			<Header></Header>
			<Courses></Courses>
			<CreateCourse></CreateCourse>
		</>
	);
}
export default App;

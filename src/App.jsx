import { createGlobalStyle } from 'styled-components';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
	return (
		<>
			<Global />
			<Header></Header>
			<Courses></Courses>
		</>
	);
}
export default App;

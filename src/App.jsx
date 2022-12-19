import { createGlobalStyle } from 'styled-components';
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
		</>
	);
}
export default App;

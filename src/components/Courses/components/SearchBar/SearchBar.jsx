import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { Flex } from '../../../Header/Header';

function SearchBar({ query, onHandleInputChange, onHandleClick }) {
	return (
		<Flex>
			<Input
				type='text'
				name='search'
				value={query}
				placeholderText='Enter course name or id...'
				onChange={onHandleInputChange}
			></Input>
			<Button buttonText='Search' onClick={onHandleClick}></Button>
		</Flex>
	);
}
export default SearchBar;

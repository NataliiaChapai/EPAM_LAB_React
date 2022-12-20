import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { Flex } from '../../../Header/Header';

function SearchBar() {
	return (
		<Flex>
			<Input placeholderText='Enter course name or id...'></Input>
			<Button buttonText='Search'></Button>
		</Flex>
	);
}
export default SearchBar;

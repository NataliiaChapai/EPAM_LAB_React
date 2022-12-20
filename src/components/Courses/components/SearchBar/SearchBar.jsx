import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { Flex } from '../../../Header/Header';

function SearchBar() {
	return (
		<Flex>
			<Flex>
				<Input placeholderText='Enter course name or id...'></Input>
				<Button buttonText='Search'></Button>
			</Flex>
			<Button buttonText='Add new course'></Button>
		</Flex>
	);
}
export default SearchBar;

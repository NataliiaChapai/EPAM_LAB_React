import { Input, Button } from '../../../../common';
import { StyledFlexCenterItem, StyledFlexLeftItem } from './AddAuthor.styled';

export const AddAuthor = () => (
	<StyledFlexCenterItem>
		<h3>Add authors</h3>
		<StyledFlexLeftItem>
			<Input
				labelText='Author name'
				placeholderText='Enter author name...'
			></Input>
		</StyledFlexLeftItem>

		<Button buttonText='Create author'></Button>
	</StyledFlexCenterItem>
);

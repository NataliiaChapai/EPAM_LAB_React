import { Input, Button } from '../../../../common';

export const AddAuthor = () => (
	<div>
		<h3>Add authors</h3>
		<Input
			labelText='Author name'
			placeholderText='Enter author name...'
		></Input>
		<Button buttonText='Create author'></Button>
	</div>
);

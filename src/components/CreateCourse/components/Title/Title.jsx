import { Input } from '../../../../common';

export const Title = ({ title, onInputTitle }) => (
	<Input
		labelText='Title'
		placeholderText='Enter title...'
		value={title}
		onChange={onInputTitle}
	></Input>
);

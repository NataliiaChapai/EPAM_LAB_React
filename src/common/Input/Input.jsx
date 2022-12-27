import PropTypes from 'prop-types';

import { Label, StyledInput } from './Input.styled';

export const Input = ({ labelText, placeholderText, onChange, type, name }) => (
	<Label>
		{labelText}
		<StyledInput
			name={name ?? 'name'}
			type={type ?? 'text'}
			placeholder={placeholderText}
			onChange={onChange}
		></StyledInput>
	</Label>
);

Input.propTypes = {
	placeholderText: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	name: PropTypes.string,
};

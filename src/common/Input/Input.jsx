import PropTypes from 'prop-types';

import { Label, StyledInput } from './Input.styled';

export const Input = ({ labelText, placeholderText, onChange }) => (
	<Label>
		{labelText}
		<StyledInput
			placeholder={placeholderText}
			onChange={onChange}
		></StyledInput>
	</Label>
);

Input.propTypes = {
	placeholderText: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	onChange: PropTypes.func,
};

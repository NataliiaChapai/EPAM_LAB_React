import PropTypes from 'prop-types';

import { StyledInput } from './Input.styled';

export const Input = ({ labelText, placeholderText, onChange }) => (
	<label>
		<StyledInput
			placeholder={placeholderText}
			onChange={onChange}
		></StyledInput>
		{labelText}
	</label>
);

Input.propTypes = {
	placeholderText: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	onChange: PropTypes.func,
};

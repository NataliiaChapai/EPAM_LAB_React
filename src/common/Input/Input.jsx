import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
	padding: 5px;
	min-width: 30vw;
	border: 1px solid orange;
`;

function Input({ labelText, placeholderText, onChange }) {
	return (
		<label>
			<StyledInput
				placeholder={placeholderText}
				onChange={onChange}
			></StyledInput>
			{labelText}
		</label>
	);
}
export default Input;

Input.propTypes = {
	placeholderText: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	onChange: PropTypes.func,
};

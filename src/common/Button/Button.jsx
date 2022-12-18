import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
	padding: 5px;
	min-width: 130px;
	border: 1px solid purple;
	background-color: #fff;
`;

function Button({ buttonText, onClick }) {
	return <Btn onClick={onClick}>{buttonText}</Btn>;
}
export default Button;

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export const Button = ({ buttonText, onClick }) => (
	<Btn onClick={onClick}>{buttonText}</Btn>
);

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

import PropTypes from 'prop-types';

import { StyledBtn } from './Button.styled';

export const Button = ({ buttonText, onClick }) => (
	<StyledBtn onClick={onClick}>{buttonText}</StyledBtn>
);

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

import { Input } from '../../../../common';
import PropTypes from 'prop-types';

export const Title = ({ title, onInputTitle }) => (
	<Input
		labelText='Title'
		placeholderText='Enter title...'
		value={title}
		onChange={onInputTitle}
	></Input>
);

Title.propTypes = {
	title: PropTypes.string.isRequired,
	onInputTitle: PropTypes.func.isRequired,
};

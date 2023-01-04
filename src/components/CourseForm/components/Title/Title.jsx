import { Input } from '../../../../common';
import PropTypes from 'prop-types';
import { StyledFlexItem } from '../AddAuthor/AddAuthor.styled';

export const Title = ({ title, onInputTitle }) => (
	<StyledFlexItem>
		<Input
			labelText='Title'
			placeholderText='Enter title...'
			value={title}
			onChange={onInputTitle}
		></Input>
	</StyledFlexItem>
);

Title.propTypes = {
	title: PropTypes.string.isRequired,
	onInputTitle: PropTypes.func.isRequired,
};

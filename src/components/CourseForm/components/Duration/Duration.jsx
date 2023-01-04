import { Input } from '../../../../common';
import PropTypes from 'prop-types';

import { pipeDuration } from '../../../../helpers/pipeDuration';

import {
	StyledFlexCenterItem,
	StyledFlexLeftItem,
} from '../AddAuthor/AddAuthor.styled';
import { StyledP } from './Duration.styled';

export const Duration = ({ duration, onAddDuration }) => {
	return (
		<StyledFlexCenterItem>
			<h3>Duration</h3>
			<StyledFlexLeftItem>
				<Input
					type='number'
					value={duration}
					labelText='Duration'
					placeholderText='Enter duration in minutes...'
					onChange={onAddDuration}
				></Input>
				<StyledP>Duration: {pipeDuration(duration)}</StyledP>
			</StyledFlexLeftItem>
		</StyledFlexCenterItem>
	);
};

Duration.propTypes = {
	duration: PropTypes.number.isRequired,
	onAddDuration: PropTypes.func.isRequired,
};

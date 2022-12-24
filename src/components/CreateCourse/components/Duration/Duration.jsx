import { Input } from '../../../../common';
import { pipeDuration } from '../../../../helpers/pipeDuration';

import {
	StyledFlexCenterItem,
	StyledFlexLeftItem,
} from '../AddAuthor/AddAuthor.styled';
import { StyledP } from './Duration.styled';

export const Duration = ({ duration, onChange }) => (
	<StyledFlexCenterItem>
		<h3>Duration</h3>
		<StyledFlexLeftItem>
			<Input
				value={duration}
				labelText='Duration'
				placeholderText='Enter duration in minutes...'
				onChange={onChange}
			></Input>
			<StyledP>Duration: {pipeDuration(duration)}</StyledP>
		</StyledFlexLeftItem>
	</StyledFlexCenterItem>
);

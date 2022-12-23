import { Input } from '../../../../common';
import { pipeDuration } from '../../../../helpers/pipeDuration';

export const Duration = ({ duration, onChange }) => (
	<div>
		<h3>Duration</h3>
		<Input
			value={duration}
			labelText='Duration'
			placeholderText='Enter duration in minutes...'
			onChange={onChange}
		></Input>
		<p>Duration: {pipeDuration(duration)}</p>
	</div>
);

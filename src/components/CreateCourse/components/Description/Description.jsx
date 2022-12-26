import { Label } from '../../../../common/Input/Input.styled';
import { StyledDescription, StyledTextarea } from './Description.styled';

export const Description = ({ description, onInputDescription }) => (
	<StyledDescription>
		<Label>
			Description
			<StyledTextarea
				minLength='2'
				placeholder='Enter description'
				value={description}
				onChange={onInputDescription}
			></StyledTextarea>
		</Label>
	</StyledDescription>
);

import { Label } from '../../../../common/Input/Input.styled';
import { StyledDescription, StyledTextarea } from './Description.styled';

export const Description = () => (
	<StyledDescription>
		<Label>
			Description
			<StyledTextarea placeholder='Enter description'></StyledTextarea>
		</Label>
	</StyledDescription>
);

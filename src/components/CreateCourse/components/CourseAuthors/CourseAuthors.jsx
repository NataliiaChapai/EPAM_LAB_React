import { Button } from '../../../../common';
import {
	StyledFlexCenterItem,
	StyledFlexLeftItem,
} from '../AddAuthor/AddAuthor.styled';
import { StyledLi, StyledUl, StyledSpan } from '../Authors/Authors.styled';
import { StyledP } from './CourseAuthors.styled';

export const CourseAuthors = ({ courseAuthors }) => (
	<StyledFlexCenterItem>
		<h3>Course authors</h3>
		{courseAuthors.length > 0 ? (
			<StyledFlexLeftItem>
				<StyledUl>
					{courseAuthors.map(({ name, id }) => (
						<StyledLi key={id}>
							<StyledSpan>{name}</StyledSpan>
							<Button buttonText='Delete'></Button>
						</StyledLi>
					))}
				</StyledUl>
			</StyledFlexLeftItem>
		) : (
			<StyledP>Author list is empty</StyledP>
		)}
	</StyledFlexCenterItem>
);

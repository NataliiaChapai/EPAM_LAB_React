import { Button } from '../../../../common';
import {
	StyledFlexCenterItem,
	StyledFlexLeftItem,
} from '../AddAuthor/AddAuthor.styled';
import { StyledLi, StyledUl } from '../Authors/Authors.styled';
import { StyledP } from './CourseAuthors.styled';

export const CourseAuthors = ({ courseAuthors }) => (
	<StyledFlexCenterItem>
		<h3>Course authors</h3>
		{courseAuthors.length > 0 ? (
			<StyledFlexLeftItem>
				<StyledUl>
					{courseAuthors.map((author) => (
						<>
							<StyledLi>{author.name}</StyledLi>
							<Button buttonText='Delete'></Button>
						</>
					))}
				</StyledUl>
			</StyledFlexLeftItem>
		) : (
			<StyledP>Author list is empty</StyledP>
		)}
	</StyledFlexCenterItem>
);

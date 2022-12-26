import { Button } from '../../../../common';
import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { renderAuthors } from '../../../../helpers/getAuthorsList';

import {
	StyledCourseCard,
	StyledLeftDiv,
	StyledTitle,
	StyledRightDiv,
	StyledText,
	StyledSpan,
	StyledBtn,
} from './CourseCard.styled';

export const CourseCard = ({ courseItem }) => (
	<StyledCourseCard>
		<StyledLeftDiv>
			<StyledTitle>{courseItem.title}</StyledTitle>
			<p>{courseItem.description}</p>
		</StyledLeftDiv>
		<StyledRightDiv>
			<StyledText>
				<StyledSpan>Authors: </StyledSpan>
				{renderAuthors(courseItem.authors)}
			</StyledText>
			<StyledText>
				<StyledSpan>Duration: </StyledSpan>
				{pipeDuration(courseItem.duration)}
			</StyledText>
			<StyledText>
				<StyledSpan>Created: </StyledSpan>
				{dateGenerator(courseItem.creationDate, 'dd.mm.yyyy')}
			</StyledText>
			<StyledBtn>
				<Button buttonText='Show course'></Button>
			</StyledBtn>
		</StyledRightDiv>
	</StyledCourseCard>
);

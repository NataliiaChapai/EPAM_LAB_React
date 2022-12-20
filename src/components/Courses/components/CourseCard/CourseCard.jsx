import styled from 'styled-components';
import Button from '../../../../common/Button/Button';
import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { Flex } from '../../../Header/Header';
import { renderAuthors } from '../../../../helpers/getAuthorsList';

const StyledCourseCard = styled(Flex)`
	padding: 15px;
	border: 2px solid green;
	margin-top: 20px;
	justify-content: start;
`;
const StyledRightDiv = styled.div`
	padding-right: 50px;
`;
const StyledLeftDiv = styled.div`
	padding-right: 50px;
	width: 75%;
`;
const StyledBtn = styled(Flex)`
	margin-top: 10px;
	justify-content: center;
`;
const StyledText = styled.p`
	padding: 5px;
`;
const StyledSpan = styled.span`
	font-weight: 700;
`;
const StyledTitle = styled.h2`
	font-size: 32px;
	font-weight: 600;
	line-height: 1;
	margin-bottom: 10px;
`;

function CourseCard({ courseItem }) {
	return (
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
					{dateGenerator(courseItem.creationDate)}
				</StyledText>
				<StyledBtn>
					<Button buttonText='Show course'></Button>
				</StyledBtn>
			</StyledRightDiv>
		</StyledCourseCard>
	);
}
export default CourseCard;

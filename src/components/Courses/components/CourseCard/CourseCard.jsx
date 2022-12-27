import PropTypes from 'prop-types';

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
import { useNavigate } from 'react-router';

export const CourseCard = ({ courseItem }) => {
	const navigate = useNavigate();

	const handleClick = (id) => navigate(`/courses/${id}`);

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
					{dateGenerator(courseItem.creationDate, 'dd.mm.yyyy')}
				</StyledText>
				<StyledBtn>
					<Button
						buttonText='Show course'
						onClick={() => handleClick(courseItem.id)}
					></Button>
				</StyledBtn>
			</StyledRightDiv>
		</StyledCourseCard>
	);
};

CourseCard.propTypes = {
	courseItem: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		creationDate: PropTypes.string.isRequired,
		authors: PropTypes.array.isRequired,
	}),
};

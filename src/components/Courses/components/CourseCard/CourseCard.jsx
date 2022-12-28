import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { formatAuthorsList } from '../../../../helpers/getAuthorsList';

import {
	StyledCourseCard,
	StyledLeftDiv,
	StyledTitle,
	StyledRightDiv,
	StyledText,
	StyledSpan,
	StyledBtn,
	StyledLink,
} from './CourseCard.styled';

export const CourseCard = ({ courseItem }) => {
	const location = useLocation();

	return (
		<StyledCourseCard>
			<StyledLeftDiv>
				<StyledTitle>{courseItem.title}</StyledTitle>
				<p>{courseItem.description}</p>
			</StyledLeftDiv>
			<StyledRightDiv>
				<StyledText>
					<StyledSpan>Authors: </StyledSpan>
					{formatAuthorsList(courseItem.authors)}
				</StyledText>
				<StyledText>
					<StyledSpan>Created: </StyledSpan>
					{dateGenerator(courseItem.creationDate, 'dd.mm.yyyy')}
				</StyledText>
				<StyledText>
					<StyledSpan>Duration: </StyledSpan>
					{pipeDuration(courseItem.duration)}
				</StyledText>
				<StyledBtn>
					<StyledLink
						to={`/courses/${courseItem.id}`}
						state={{ from: location }}
					>
						Show course
					</StyledLink>
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

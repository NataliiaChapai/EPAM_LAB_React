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
	StyledButton,
} from './CourseCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthors } from '../../../../store/authors/selectors';
import { DELETE_COURSE } from '../../../../store/courses/actionTypes';

export const CourseCard = ({ courseItem }) => {
	const location = useLocation();
	const authors = useSelector(selectAuthors);
	const dispatch = useDispatch();

	const deleteCourse = (id) => {
		console.log('ggg');
		dispatch({ type: DELETE_COURSE, payload: id });
	};

	return (
		<StyledCourseCard>
			<StyledLeftDiv>
				<StyledTitle>{courseItem.title}</StyledTitle>
				<p>{courseItem.description}</p>
			</StyledLeftDiv>
			<StyledRightDiv>
				<StyledText>
					<StyledSpan>Authors: </StyledSpan>
					{formatAuthorsList(courseItem.authors, authors)}
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
					<StyledButton>🖉</StyledButton>
					<StyledButton onClick={() => deleteCourse(courseItem.id)}>
						🗑
					</StyledButton>
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

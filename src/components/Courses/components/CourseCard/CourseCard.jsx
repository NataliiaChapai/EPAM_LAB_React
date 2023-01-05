import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { formatAuthorsList } from '../../../../helpers/getAuthorsList';
import { selectAuthors } from '../../../../store/authors/selectors';
import { DELETE_COURSE } from '../../../../store/courses/actionTypes';

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
import { selectUser } from '../../../../store/user/selectors';

export const CourseCard = ({ courseItem }) => {
	const location = useLocation();
	const authors = useSelector(selectAuthors);
	const dispatch = useDispatch();
	const { role } = useSelector(selectUser);

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
					{role === 'admin' && <StyledButton>🖉</StyledButton>}
					{role === 'admin' && (
						<StyledButton
							onClick={() =>
								dispatch({ type: DELETE_COURSE, payload: courseItem.id })
							}
						>
							🗑
						</StyledButton>
					)}
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

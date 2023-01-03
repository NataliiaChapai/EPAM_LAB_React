import { useLocation, useParams } from 'react-router';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { dateGenerator } from '../../helpers/dateGenerator';
import { pipeDuration } from '../../helpers/pipeDuration';
import { getAuthors } from '../../helpers/getAuthorsList';

import {
	StyledLeftDiv,
	StyledTitle,
	StyledRightDiv,
	StyledText,
	StyledSpan,
} from '../Courses/components/CourseCard/CourseCard.styled';
import { StyledContainer } from '../Courses/Courses.styled';
import {
	StyledBackLink,
	StyledCenterItem,
	StyledList,
} from './CourseInfo.styled';
import { StyledFlex } from '../Header/Header.styled';
import { StyledLi } from '../CreateCourse/components/Authors/Authors.styled';
import { useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';
import { selectAuthors } from '../../store/authors/selectors';

export const CourseInfo = () => {
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);
	const { courseId } = useParams();
	const location = useLocation();
	const [page] = useState(location.state.from);
	const course = courses.find((course) => course.id === courseId);

	return (
		<StyledContainer>
			<StyledBackLink to={page}>&#60; Back to courses</StyledBackLink>
			<StyledCenterItem>
				<StyledTitle>{course.title}</StyledTitle>
			</StyledCenterItem>

			<StyledFlex>
				<StyledLeftDiv>
					<p>{course.description}</p>
				</StyledLeftDiv>
				<StyledRightDiv>
					<StyledText>
						<StyledSpan>ID: </StyledSpan>
						{course.id}
					</StyledText>
					<StyledText>
						<StyledSpan>Duration: </StyledSpan>
						{pipeDuration(course.duration)}
					</StyledText>
					<StyledText>
						<StyledSpan>Created: </StyledSpan>
						{dateGenerator(course.creationDate, 'dd.mm.yyyy')}
					</StyledText>
					<StyledText>
						<StyledSpan>Authors: </StyledSpan>
					</StyledText>
					<StyledList>
						{getAuthors(course.authors, authors).map((name) => (
							<StyledLi key={uuidv4()}>{name}</StyledLi>
						))}
					</StyledList>
				</StyledRightDiv>
			</StyledFlex>
		</StyledContainer>
	);
};

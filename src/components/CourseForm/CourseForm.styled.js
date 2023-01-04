import styled from 'styled-components';
import { AddAuthor } from './components/AddAuthor';
import { Authors } from './components/Authors';
import { Duration } from './components/Duration';
import { CourseAuthors } from './components/CourseAuthors';

export const StyledWrapFlex = styled.div`
	display: flex;
	flex-wrap: wrap;
	alain-item: center;
	width: 100%;
	margin: 0;
	justify-content: space-between;
	border: 2px solid black;
	padding: 30px 15px;
`;
export const StyledAddAuthor = styled(AddAuthor)`
	width: 50%;
`;

export const StyledAuthors = styled(Authors)`
	width: 50%;
`;

export const StyledDuration = styled(Duration)`
	width: 50%;
`;

export const StyledCourseAuthors = styled(CourseAuthors)`
	width: 50%;
`;

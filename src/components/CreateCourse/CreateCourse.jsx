import { useState } from 'react';

import { Title } from './components/Title';
import { Description } from './components/Description';

import { StyledContainer } from '../Courses/Courses.styled';
import { StyledWrapFlex } from './CreateCourse.styled';
import { CourseAuthors } from './components/CourseAuthors';
import { Authors } from './components/Authors';
import { Duration } from './components/Duration';
import { AddAuthor } from './components/AddAuthor';
import { mockedAuthorsList } from '../Courses/mockedAuthorsList';

export const CreateCourse = ({ courseItem }) => {
	const [duration, setDuration] = useState('0');
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const handleDurationChange = (event) => {
		const { value } = event.currentTarget;
		setDuration(value);
	};

	const addAuthor = (authorId) => {
		const author = authorsList.find((a) => a.id === authorId);
		setCourseAuthors((prev) => [...prev, author]);
		const updatedAuhtorList = authorsList.filter(
			(author) => author.id !== authorId
		);
		setAuthorsList(updatedAuhtorList);
	};

	const deleteAuthor = (authorId) => {
		const author = courseAuthors.find((a) => a.id === authorId);
		const updatedCourseList = courseAuthors.filter(
			(author) => author.id !== authorId
		);
		setCourseAuthors(updatedCourseList);
		setAuthorsList((prev) => [...prev, author]);
	};

	return (
		<StyledContainer>
			<Title></Title>
			<Description></Description>
			<StyledWrapFlex>
				<AddAuthor></AddAuthor>
				<Authors
					authorsList={authorsList}
					onAddAuthorBtnClick={addAuthor}
				></Authors>
				<Duration
					onChange={handleDurationChange}
					duration={duration}
				></Duration>
				<CourseAuthors
					courseAuthors={courseAuthors}
					onDeleteAuthorBtnClick={deleteAuthor}
				></CourseAuthors>
			</StyledWrapFlex>
		</StyledContainer>
	);
};

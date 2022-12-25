import { useState } from 'react';

import { Title } from './components/Title';
import { Description } from './components/Description';
import { CourseAuthors } from './components/CourseAuthors';
import { Authors } from './components/Authors';
import { Duration } from './components/Duration';
import { AddAuthor } from './components/AddAuthor';
import { mockedAuthorsList } from '../Courses/mockedAuthorsList';
import { Button } from '../../common';

import { StyledContainer } from '../Courses/Courses.styled';
import { StyledWrapFlex } from './CreateCourse.styled';
import { StyledFlex } from '../Header/Header.styled';

export const CreateCourse = ({ onHandleClick }) => {
	const [duration, setDuration] = useState('0');
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const createAuthor = (author) => {
		console.log(author);
		setAuthorsList((prev) => [...prev, author]);
		mockedAuthorsList.push(author);
		console.log(mockedAuthorsList);
	};

	const addAuthor = (authorId) => {
		const author = authorsList.find((a) => a.id === authorId);
		setCourseAuthors((prev) => [...prev, author]);
		const updatedAuhtorList = authorsList.filter(
			(author) => author.id !== authorId
		);
		setAuthorsList(updatedAuhtorList);
	};

	const addDuration = (event) => {
		const { value } = event.currentTarget;
		setDuration(value);
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
			<StyledFlex>
				<Title></Title>
				<Button buttonText='Create course' onClick={onHandleClick}></Button>
			</StyledFlex>
			<Description></Description>
			<StyledWrapFlex>
				<AddAuthor onCreateAuthorBtnClick={createAuthor}></AddAuthor>
				<Authors
					authorsList={authorsList}
					onAddAuthorBtnClick={addAuthor}
				></Authors>
				<Duration duration={duration} onChange={addDuration}></Duration>
				<CourseAuthors
					courseAuthors={courseAuthors}
					onDeleteAuthorBtnClick={deleteAuthor}
				></CourseAuthors>
			</StyledWrapFlex>
		</StyledContainer>
	);
};

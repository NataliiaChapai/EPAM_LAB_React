import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

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
import { dateGenerator } from '../../helpers/dateGenerator';

export const CreateCourse = ({ onHandleClick }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('0');
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	let newCourse = {
		id: uuidv4(),
		title,
		description,
		creationDate: dateGenerator(new Date(), 'mm/dd/yyyy'),
		duration,
		authors: courseAuthors.map(({ id }) => id),
	};

	const addTitle = (event) => {
		const { value: title } = event.currentTarget;
		setTitle(title);
	};

	const addDescription = (event) => {
		const { value: description } = event.currentTarget;
		setDescription(description);
	};

	const createAuthor = (author) => {
		setAuthorsList((prev) => [...prev, author]);
		mockedAuthorsList.push(author);
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
		const { value: duration } = event.currentTarget;
		setDuration(duration);
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
				<Title title={title} onInputTitle={addTitle}></Title>
				<Button
					buttonText='Create course'
					onClick={() => onHandleClick(newCourse)}
				></Button>
			</StyledFlex>
			<Description
				description={description}
				onInputDescription={addDescription}
			></Description>
			<StyledWrapFlex>
				<AddAuthor onCreateAuthorBtnClick={createAuthor}></AddAuthor>
				<Authors
					authorsList={authorsList}
					onAddAuthorBtnClick={addAuthor}
				></Authors>
				<Duration duration={duration} onAddDuration={addDuration}></Duration>
				<CourseAuthors
					courseAuthors={courseAuthors}
					onDeleteAuthorBtnClick={deleteAuthor}
				></CourseAuthors>
			</StyledWrapFlex>
		</StyledContainer>
	);
};

Duration.propTypes = {
	onHandleClick: PropTypes.func.isRequired,
};

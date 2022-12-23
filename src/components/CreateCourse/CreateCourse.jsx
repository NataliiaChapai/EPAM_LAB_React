import { useState } from 'react';

import { Title } from './components/Title';
import { Description } from './components/Description';

import { StyledContainer } from '../Courses/Courses.styled';
import { CourseAuthors } from './components/CourseAuthors';
import { Authors } from './components/Authors';
import { Duration } from './components/Duration';
import { AddAuthor } from './components/AddAuthor';

export const CreateCourse = ({ courseItem }) => {
	const [duration, setDuration] = useState('0');
	let courseAuthors = [];

	const handleDurationChange = (event) => {
		const { value } = event.currentTarget;
		setDuration(value);
	};

	return (
		<StyledContainer>
			<Title></Title>
			<Description></Description>
			<div>
				<AddAuthor></AddAuthor>
				<Authors></Authors>
				<Duration
					onChange={handleDurationChange}
					duration={duration}
				></Duration>
				<CourseAuthors courseAuthors={courseAuthors}></CourseAuthors>
			</div>
		</StyledContainer>
	);
};

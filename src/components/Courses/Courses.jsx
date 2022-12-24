import { useEffect, useState } from 'react';

import { Button } from '../../common';
import { CourseCard, SearchBar } from './components';
import { mockedCoursesList } from './mockedCoursesList';

import { StyledFlex } from '../Header/Header.styled';
import { StyledContainer } from './Courses.styled';

export const Courses = ({ onHandleClick }) => {
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState('');

	const handleInputChange = (event) => {
		const { value } = event.currentTarget;
		setQuery(value);
	};

	const handleClick = (event) => {
		event.preventDefault();
		setSearch(query.toLowerCase());
	};

	const searchCourse = mockedCoursesList.filter(
		(course) =>
			course.title.toLowerCase().includes(search) ||
			course.id.toLowerCase().includes(search)
	);

	useEffect(() => {
		if (!query) {
			setSearch('');
		}
	}, [query]);

	return (
		<StyledContainer>
			<StyledFlex>
				<SearchBar
					value={query}
					onHandleClick={handleClick}
					onHandleInputChange={handleInputChange}
				></SearchBar>
				<Button onClick={onHandleClick} buttonText='Add new course'></Button>
			</StyledFlex>
			<ul>
				{searchCourse.map((course) => (
					<CourseCard key={course.id} courseItem={course}></CourseCard>
				))}
			</ul>
		</StyledContainer>
	);
};

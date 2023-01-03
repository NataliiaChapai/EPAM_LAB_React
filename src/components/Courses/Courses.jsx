import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCourses } from '../../store/courses/selectors';
import { Button } from '../../common';
import { CourseCard, SearchBar } from './components';

import { StyledFlex } from '../Header/Header.styled';
import { StyledContainer } from './Courses.styled';

export const Courses = () => {
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState('');
	const courses = useSelector(selectCourses);
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const { value } = event.currentTarget;
		setQuery(value);
	};

	const handleClick = (event) => {
		event.preventDefault();
		setSearch(query.toLowerCase());
	};

	const searchCourse = courses.filter(
		(course) =>
			course.title.toLowerCase().includes(search) ||
			course.id.toLowerCase().includes(search)
	);

	const addNewCourse = () => {
		navigate('/courses/add');
	};

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
				<Button onClick={addNewCourse} buttonText='Add new course'></Button>
			</StyledFlex>
			<ul>
				{searchCourse.map((course) => (
					<CourseCard key={course.id} courseItem={course}></CourseCard>
				))}
			</ul>
		</StyledContainer>
	);
};

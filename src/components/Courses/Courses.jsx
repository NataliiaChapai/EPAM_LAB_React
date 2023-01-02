import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common';
import { CourseCard, SearchBar } from './components';

import { StyledFlex } from '../Header/Header.styled';
import { StyledContainer } from './Courses.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';
import { getAuthors, getCourses } from '../../services';
import { GET_COURSES } from '../../store/courses/actionTypes';
import { GET_AUTHORS } from '../../store/authors/actionTypes';

export const Courses = ({ onHandleClick }) => {
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();
	const courses = useSelector(selectCourses);

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
	useEffect(() => {
		getAuthors().then((responce) =>
			dispatch({ type: GET_AUTHORS, payload: responce })
		);
		getCourses().then((response) =>
			dispatch({ type: GET_COURSES, payload: response })
		);
	}, [dispatch]);

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

Courses.propTypes = {
	onHandleClick: PropTypes.func.isRequired,
};

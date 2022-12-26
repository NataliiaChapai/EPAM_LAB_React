import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common';
import { CourseCard, SearchBar } from './components';

import { StyledFlex } from '../Header/Header.styled';
import { StyledContainer } from './Courses.styled';

export const Courses = ({ courses, onHandleClick }) => {
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

	const searchCourse = courses.filter(
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

Courses.propTypes = {
	onHandleClick: PropTypes.func.isRequired,
	courses: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			duration: PropTypes.number.isRequired,
			creationDate: PropTypes.string.isRequired,
			authors: PropTypes.array.isRequired,
		})
	).isRequired,
};

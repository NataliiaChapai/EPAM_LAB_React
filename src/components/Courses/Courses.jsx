import styled from 'styled-components';
import Button from '../../common/Button/Button';
import { useEffect, useState } from 'react';

import { Flex } from '../Header/Header';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedCoursesList } from './mockedCoursesList';

const StyledCourses = styled.div`
	padding: 20px;
	border: 2px solid blue;
`;

function Courses() {
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
		<StyledCourses>
			<Flex>
				<SearchBar
					value={query}
					onHandleClick={handleClick}
					onHandleInputChange={handleInputChange}
				></SearchBar>
				<Button buttonText='Add new course'></Button>
			</Flex>
			<ul>
				{searchCourse.map((course) => (
					<CourseCard key={course.id} courseItem={course}></CourseCard>
				))}
			</ul>
		</StyledCourses>
	);
}
export default Courses;

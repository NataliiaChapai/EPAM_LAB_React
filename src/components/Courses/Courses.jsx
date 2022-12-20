import styled from 'styled-components';
import Button from '../../common/Button/Button';
import { Flex } from '../Header/Header';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedCoursesList } from './mockedCoursesList';

const StyledCourses = styled.div`
	padding: 20px;
	border: 2px solid blue;
`;

function Courses() {
	return (
		<StyledCourses>
			<Flex>
				<SearchBar></SearchBar>
				<Button buttonText='Add new course'></Button>
			</Flex>
			<ul>
				{mockedCoursesList.map((course) => (
					<CourseCard key={course.id} courseItem={course}></CourseCard>
				))}
			</ul>
		</StyledCourses>
	);
}
export default Courses;

import styled from 'styled-components';
import { StyledFlexCenterItem } from '../CourseForm/components/AddAuthor/AddAuthor.styled';

export const StyledFlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-item: center;
	text-align: left;
	padding: 20px;
	width: 100%;
	margin: 0 auto;
`;

export const StyledCenterItem = styled(StyledFlexCenterItem)`
	margin: auto;
	width: 30%;
`;

export const StyledSection = styled.section`
	margin-top: 20px;
	border: 2px solid blue;
	padding: auto;
	display: flex;
	flex-direction: column;
	align-item: center;
	height: 80vh;
`;

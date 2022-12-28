import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledFlex } from '../../../Header/Header.styled';

export const StyledCourseCard = styled(StyledFlex)`
	padding: 15px;
	border: 2px solid green;
	margin-top: 20px;
	justify-content: start;
`;
export const StyledRightDiv = styled.div`
	padding-right: 50px;
	width: 25%;
`;
export const StyledLeftDiv = styled.div`
	padding-right: 50px;
	width: 75%;
`;
export const StyledBtn = styled(StyledFlex)`
	margin-top: 10px;
	justify-content: center;
`;
export const StyledText = styled.p`
	padding: 5px;
`;
export const StyledSpan = styled.span`
	font-weight: 700;
`;
export const StyledTitle = styled.h2`
	font-size: 32px;
	font-weight: 600;
	line-height: 1;
	margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
	padding: 5px;
	min-width: 130px;
	border: 2px solid purple;
	background-color: #fff;
	text-align: center;
	font-family: initial;
	line-height: 1;
`;

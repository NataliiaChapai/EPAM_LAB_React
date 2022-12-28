import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledUl } from '../CreateCourse/components/Authors/Authors.styled';

export const StyledBackLink = styled(Link)`
	font-size: 18px;
`;

export const StyledCenterItem = styled.div`
	text-align: center;
`;

export const StyledList = styled(StyledUl)`
	margin: 0;
`;

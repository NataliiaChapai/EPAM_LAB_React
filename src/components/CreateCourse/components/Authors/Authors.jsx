import { Button } from '../../../../common';
import { mockedAuthorsList } from '../../../Courses/mockedAuthorsList';
import { StyledFlexCenterItem } from '../AddAuthor/AddAuthor.styled';
import { StyledSpan, StyledUl, StyledLi } from './Authors.styled';

export const Authors = () => (
	<StyledFlexCenterItem>
		<h3>Authors</h3>
		<StyledUl>
			{mockedAuthorsList.map((author) => (
				<StyledLi key={author.id}>
					<StyledSpan>{author.name}</StyledSpan>
					<Button buttonText='Add author'></Button>
				</StyledLi>
			))}
		</StyledUl>
	</StyledFlexCenterItem>
);

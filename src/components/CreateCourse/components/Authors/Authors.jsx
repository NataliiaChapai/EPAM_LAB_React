import { Button } from '../../../../common';
import { StyledFlexCenterItem } from '../AddAuthor/AddAuthor.styled';
import { StyledSpan, StyledUl, StyledLi } from './Authors.styled';

export const Authors = ({ authorsList, onAddAuthorBtnClick }) => (
	<StyledFlexCenterItem>
		<h3>Authors</h3>
		<StyledUl>
			{authorsList.map(({ id, name }) => (
				<StyledLi key={id}>
					<StyledSpan>{name}</StyledSpan>
					<Button
						onClick={() => onAddAuthorBtnClick(id)}
						buttonText='Add author'
					></Button>
				</StyledLi>
			))}
		</StyledUl>
	</StyledFlexCenterItem>
);

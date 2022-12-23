import { Button } from '../../../../common';
import { mockedAuthorsList } from '../../../Courses/mockedAuthorsList';

export const Authors = () => (
	<div>
		<h3>Authors</h3>
		<ul>
			{mockedAuthorsList.map((author) => (
				<li key={author.id}>
					<p>{author.name}</p>
					<Button buttonText='Add author'></Button>
				</li>
			))}
		</ul>
	</div>
);

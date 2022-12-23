import { Button } from '../../../../common';

export const CourseAuthors = ({ courseAuthors }) => (
	<div>
		<h3>Course authors</h3>
		{courseAuthors.length > 0 ? (
			<ul>
				{courseAuthors.map((author) => (
					<>
						<li>{author.name}</li>
						<Button buttonText='Delete'></Button>
					</>
				))}
			</ul>
		) : (
			<p>Author list is empty</p>
		)}
	</div>
);

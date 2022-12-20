import { mockedAuthorsList } from '../components/Courses/mockedAuthorsList';

const getAuthor = (id) => mockedAuthorsList.find((el) => el.id === id).name;

export const renderAuthors = (idsArray) => {
	let authorsArray = [];
	idsArray.map((authorId) => {
		let author = getAuthor(authorId);
		authorsArray.push(author);
		return authorsArray;
	});

	let line = authorsArray.join(', ');
	if (line.length > 30) {
		line = line.slice(0, 30);
		line = line + '...';
	}
	return line;
};

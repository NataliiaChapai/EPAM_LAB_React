export const getAuthors = (idsArray, authorsArray) => {
	const getAuthor = (id) => authorsArray.find((el) => el.id === id).name;
	let authorsList = [];
	idsArray.map((authorId) => {
		let author = getAuthor(authorId);
		authorsList.push(author);
		return authorsList;
	});
	return authorsList;
};

export const formatAuthorsList = (idsArray, authorsArray) => {
	let line = getAuthors(idsArray, authorsArray).join(', ');
	if (line.length > 30) {
		line = line.slice(0, 30);
		line = line + '...';
	}
	return line;
};

export const dateGenerator = (date) => {
	const dateArray = date.split('/');
	if (dateArray[0].length === 1) {
		dateArray[0] = '0' + dateArray[0];
	}
	if (dateArray[1].length === 1) {
		dateArray[1] = '0' + dateArray[1];
	}
	return dateArray.join('.');
};

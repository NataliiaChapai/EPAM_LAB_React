export const dateGenerator = (date, format) => {
	const formatDate = new Date(date);
	const map = {
		mm: formatDate.getMonth() + 1,
		dd: formatDate.getDate(),
		yyyy: formatDate.getFullYear(),
	};

	return format.replace(/mm|dd|yyyy/gi, (matched) => map[matched]);
};

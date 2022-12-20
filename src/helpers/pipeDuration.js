export const pipeDuration = (duration) => {
	let minutes = duration % 60;
	let hours = (duration - minutes) / 60;
	if (minutes === 0) {
		minutes = '00';
	}
	if (minutes < 10 && minutes > 0) {
		minutes = '0' + minutes;
	}
	if (hours === 0) {
		hours = '00';
	}
	if (hours < 10 && hours > 0) {
		hours = '0' + hours;
	}
	return `${hours}:${minutes} hours`;
};

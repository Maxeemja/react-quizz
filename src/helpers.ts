export const shuffleAnswers = (currentQuesion) => {
	const unshuffledAnswers = [
		currentQuesion.correctAnswer,
		...currentQuesion.incorrectAnswers
	];

	return unshuffledAnswers
		.map((answer) => ({
			sort: Math.random(),
			value: answer
		}))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value);
};

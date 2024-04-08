export const shuffleAnswers = (currentQuesion) => {
	if (!currentQuesion) return;

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

export const normalizeQuestions = (backendQuestions) => {
	if (!backendQuestions?.length) return [];
	return backendQuestions.map((question) => ({
		correctAnswer: decodeURIComponent(question.correct_answer),
		question: decodeURIComponent(question.question),
		incorrectAnswers: question.incorrect_answers.map((item) =>
			decodeURIComponent(item)
		)
	}));
};

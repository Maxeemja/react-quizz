import { ReactElement, useContext } from 'react';
import Answer from './Answer';
import { QuizContext } from '../contexts/quiz';

const Question = (): ReactElement => {
	const [quizState, dispatch] = useContext(QuizContext);
	const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

	return (
		<div>
			<div className='question'>{currentQuestion.question}</div>
			<div className='answers'>
				{quizState.answers.map((answer, index) => (
					<Answer
						key={index}
						answerText={answer}
						index={index}
						currentAnswer={quizState.currentAnswer}
						correctAnswer={currentQuestion.correctAnswer}
						onSelectAnswer={(answerText) =>
							dispatch({ type: 'SELECT_ANSWER', payload: answerText })
						}
					/>
				))}
			</div>
		</div>
	);
};

export default Question;

import { ReactElement, useContext } from 'react';
import Question from './Question';
import { QuizContext } from '../contexts/quiz';

const Quiz = (): ReactElement => {
	const [quizState, dispatch] = useContext(QuizContext);

	return (
		<div className='quiz'>
			<div>
				<div className='score'>
					Question {quizState.currentQuestionIndex + 1}/
					{quizState.questions.length}
				</div>
				<Question questions={quizState.questions} />
				<div
					className='next-button'
					onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
				>
					Next question
				</div>
			</div>
		</div>
	);
};

export default Quiz;

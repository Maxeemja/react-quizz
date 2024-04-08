import { ReactElement, useContext } from 'react';
import Question from './Question';
import { QuizContext } from '../contexts/quiz';

const Quiz = (): ReactElement => {
	const [quizState, dispatch] = useContext(QuizContext);

	return (
		<div className='quiz'>
			{!quizState.showResults ? (
				<div>
					<div className='score'>
						Question {quizState.currentQuestionIndex + 1}/
						{quizState.questions.length}
					</div>
					<Question />
					<div
						className='next-button'
						onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
					>
						Next question
					</div>
				</div>
			) : (
				<div className='results'>
					<div className='congratulations'></div>
					<div className='results-info'>
						<div>You've completed the quiz.</div>
						<div>
							You've got {quizState.correctAnswersCount} of{' '}
							{quizState.questions.length}
						</div>
					</div>
					<div
						className='next-button'
						onClick={() => dispatch({ type: 'RESET' })}
					>
						Restart
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;

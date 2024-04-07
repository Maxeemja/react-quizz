import { ReactElement, useReducer, useState } from 'react';
import Question from './Question';

const initialState = {
	currentQuestionIndex: 0,
	questions: []
};

const reducer = (state, action) => {
	if (action.type === 'NEXT_QUESTION') {
		return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
	}
	return state;
};

const Quiz = (): ReactElement => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='quiz'>
			<div>
				<div className='score'>Question 1/8</div>
				<Question questions={state.questions} />
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

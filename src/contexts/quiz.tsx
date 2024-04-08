import { createContext, useReducer } from 'react';
import questions from '../data'


const initialState = {
	currentQuestionIndex: 0,
	questions
};

const reducer = (state, action) => {
	if (action.type === 'NEXT_QUESTION') {
		return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
	}
	return state;
};

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
	const value = useReducer(reducer, initialState);

	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

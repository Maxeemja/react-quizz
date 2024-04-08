import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from './components/Quiz.tsx';
import { QuizProvider } from './contexts/quiz.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QuizProvider>
			<Quiz></Quiz>
		</QuizProvider>
	</React.StrictMode>
);

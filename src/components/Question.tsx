import { ReactElement } from 'react';
import Answer from './Answer';

const Question = (props: object): ReactElement => {
	return (
		<>
			<div className='question'>Text of Question</div>
			<div>{props.questions}</div>
			<div className='answers'>
				<Answer />
				<Answer />
				<Answer />
				<Answer />
			</div>
		</>
	);
};

export default Question;

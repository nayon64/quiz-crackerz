import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Question from '../Question/Question';

const Quiz = () => {
	
	const quizs = useLoaderData();
	const [carts, setCarts] = useState([]);
	
	const { name, questions } = quizs.data;
	const correctAnswer = () => {
		
	}
	const quizCalculatin = (props) => {
		const cheack = carts.find(cart => cart.name === props.name)
		if (cheack === undefined) {
			const selectedQuize = [...carts, props];
			setCarts(selectedQuize)
		}
	}
	
	return (
		<div>
			<h1 className='font-semibold text-4xl text-pink-600'>Quiz of <span className='text-gray-700 font-bold'>{name}</span></h1>
			<div className='max-w-7xl mx-auto py-5 grid md:grid-cols-4'>
				<div className='md:col-span-3 p-3'>
					{
						questions.map((quiz,idx) => <Question
							key={quiz.id}
							quiz={quiz}
							idx={idx}
							quizCalculatin={quizCalculatin}
							correctQuestion={correctAnswer}
						></Question>)
					}
				</div>
				<div className='md:col-span-1 bg-pink-200  mx-3 rounded-2xl mt-2 mb-8'>
					<Cart carts={carts}></Cart>	
				</div>
			</div>
		</div>
	);
};

export default Quiz;
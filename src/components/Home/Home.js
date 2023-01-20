import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizCart from '../QuizCart/QuizCart';

const Home = () => {
	const quizs = useLoaderData().data;
	return (
		<div>
			<Header></Header>
			<div>
				<h1 className='mt-16 mb-12 font-semibold text-pink-600 text-6xl'>Cheack Your Skills</h1>
				<div className='max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-3'>
					{
						quizs.map(quiz => <QuizCart
							key={quiz.id}
							quiz={quiz}
						></QuizCart>)
					}
				</div>
			</div>
		</div>
	);
};

export default Home;
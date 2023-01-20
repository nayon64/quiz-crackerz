import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const QuizCart = ({ quiz }) => {
	const {logo,name,total,id}=quiz
	return (
		<div className='bg-blue-300/50 mb-4 sm:mb-10 md:mb-10'>
			<div className="p-4">
				<img className='w-full' src={logo} alt="" />
			</div>
			<div className='bg-pink-200 rounded-2xl'>
				<div className='flex align-middle justify-between px-5 p-3 text-gray-800'>
					<h4 className='text-3xl font-bold '>{name}</h4>
					<p className='text-2xl'><FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon> {total}</p>
				</div>
				<button  className='w-full h-10 rounded-none bg-gray-800 transition-colors duration-500 hover:bg-pink-600 text-right pr-6 text-white font-bold tracking-wider cursor-pointer'><Link to={`/quiz/${id}`}>START PRACTICES</Link></button>

			</div>
		</div>
	);
};

export default QuizCart;
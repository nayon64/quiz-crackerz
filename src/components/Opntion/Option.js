import React from 'react';

const Option = ({ cheackAnswer, option, question }) => {
	
	return (
		<div   className=' border-gray-600 border rounded-2xl p-4 flex align-middle'>
			<input onClick={(e)=>cheackAnswer(e)} type="radio" id={option} name={question} value={option} />
			<label className='ml-4 w-full h-full text-left' htmlFor={option}>{option}</label>	
		</div>
	);
};

export default Option;
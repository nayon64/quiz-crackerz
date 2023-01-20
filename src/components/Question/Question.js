import { EyeIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Option from '../Opntion/Option';


const Question = ({ quiz, idx ,quizCalculatin}) => {
	
	const { question, options, correctAnswer } = quiz;
	
	const handleYourAns = (ans) => {
		toast.info(ans,{autoClose:500})
	}
	const cheackAnswer = (e) => {
		const value = e.target.value;
		if (value === correctAnswer) {
			toast.success("Correct", { autoClose: 500 });	
		}
		else {
			toast.error('Wrong', { autoClose: 500 })	
		}
		quizCalculatin(e.target)
	}
	return (
		<div className='border rounded-2xl border-slate-700 p-5 mb-5 relative'>
			<div >
				<h2 className='font-bold mb-6 md:text-2xl md:px-16 pr-4'>Quiz {idx + 1} : {question}</h2>
				<div className='grid md:grid-cols-2 gap-5'>
					{
						options.map((option, _idx) => <Option
							key={_idx}
							option={option}
							question={question}
							idx={_idx}
							cheackAnswer={cheackAnswer}

						></Option>)
					}
				</div>
				
			</div>
			<div onClick={()=>handleYourAns(correctAnswer)} className='w-6 h-6 md:w-10 md:h-10 md:top-4 md:right-4 absolute top-4 right-2 cursor-pointer'>
					<EyeIcon/>
			</div>
		</div>
	);
};

export default Question;
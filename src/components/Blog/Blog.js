import React from 'react';


const Blog = ({ blog }) => {
	const { img, question, answer } = blog;
	return (
		<div className='border border-slate-500'>
			<div className='w-full'>
				<img src={img} alt="" />
			</div>
			<div className='p-5'>
				<h3 className='font-bold text-3xl  mb-4'>{question}</h3>
				<p className='text-justify'>{answer}</p>
			</div>
		</div>
	);
};

export default Blog;
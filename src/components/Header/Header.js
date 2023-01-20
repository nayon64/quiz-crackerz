import React from 'react';

const Header = () => {
	return (
		<div className='bg-pink-100/50'>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 p-4'>
				<div className="flex flex-col justify-center md:text-left">
					<h1 className='text-gray-600 text-6xl font-bold mb-4 leading-tight'>
						Test Your Skills With Quizzes
					</h1>
					<p className='font-semibold text-gray-500 text-[18px]'>Make sure your learning take this quiz. Inproved your skills more and more.</p>

				</div>
				<div className="header-img flex justify-center mt-6 md:mt-0">
					<img className='max-h-[500px]' src="header.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;
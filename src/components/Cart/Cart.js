import React from 'react';
import {CheckCircleIcon,MinusCircleIcon,CursorArrowRippleIcon} from '@heroicons/react/24/solid'

const Cart = ({ carts}) => {
	console.log(carts)
	return (
		<div className='sticky top-0 py-4'>
			<h1 className='font-bold text-2xl text-gray-800'>Quizs Summery</h1>
			<div className='px-4 mt-4'>
				<div className=' border-slate-700 rounded-2xl flex align-middle justify-between px-3 py-2 border-2 '>
					<CursorArrowRippleIcon className='w-12 text-green-700 h-12' />
					<h1 className='text-4xl text-gray-700'>{carts.length}</h1>
				</div>
				<div className='mt-4 border-slate-700 rounded-2xl flex align-middle justify-between px-3 py-2 border-2 '>
					<CheckCircleIcon className='w-12 text-green-700 h-12' />
					<h1 className='text-4xl text-gray-700'>00</h1>
				</div>
				<div className='mt-4 border-slate-700 rounded-2xl flex align-middle justify-between px-3 py-2 border-2 '>
					<MinusCircleIcon className='w-12 text-red-700 h-12' />
					<h1 className='text-4xl text-gray-700'>00</h1>
				</div>
				
			</div>
		</div>
	);
};

export default Cart;
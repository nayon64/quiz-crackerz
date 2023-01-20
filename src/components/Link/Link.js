import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({route}) => {
	return (
		<div>
			<li className='md:mx-6 my-12 md:my-0 text-3xl text-pink-600 font-semibold md:text-2xl md:font-bold'><NavLink className={({ isActive }) => isActive ?"border-b-4 border-pink-700 pb-2": undefined} to={route.path}>{ route.name}</NavLink></li>
		</div>
	);
};

export default Link;
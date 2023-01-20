import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';


const NavBar = () => {
	const [open, setOpen] = useState(false);
	const routes = [
		{id:1,name:"Home", path:"/home"},
		{id:2,name:"Statistics", path:"/statistics"},
		{id:3,name:"Blogs", path:"/blogs"}	
	]
	
	return (
		<div className='flex justify-between w-full py-4 align-middle max-w-7xl mx-auto px-3'>
			<div className='text-2xl md:text-5xl font-bold flex align-middle text-pink-600'>
				<NavLink to="/">QUIZ <span className='text-gray-600'>MASTER</span></NavLink>
			</div>
			<nav onClick={() => setOpen(!open)} className=''>
				<div  className="h-6 w-6 md:hidden">
					{open ? <XMarkIcon /> : <Bars3Icon />}
				</div>
				<ul className={`md:flex justify-center py-4 absolute md:static z-40 md:bg-transparent bg-purple-200 duration-500 ease-in-out w-full ${open ? " top-14" : "top-[-3200px]"} ${open ? " left-0" : " left-0"}`}>
					{
						routes.map(route=><Link key={route.id} route={route}></Link>)
					}
					
				</ul>
			</nav>
			
			
		</div>
	);
};

export default NavBar;
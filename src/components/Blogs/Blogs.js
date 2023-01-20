import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
	const blogs = useLoaderData();
	return (
		<div>
			<h1 className='font-bold text-pink-500 text-5xl mt-12 mb-5'>This Is Our Recent Blogs</h1>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-6 p-6'>
				{
					blogs.map(blog => <Blog
						key={blog.id}
						blog={blog}
					></Blog>)
				}
			</div>
		</div>
	);
};

export default Blogs;
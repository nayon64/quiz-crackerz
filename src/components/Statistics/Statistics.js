import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
	const data = useLoaderData();
	
	return (
		<div className='md:max-w-2xl w-full mt-40 md:mt-30 p-8 mx-auto'>
				<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data.data}>
					<XAxis dataKey="name" />
					<YAxis/>
					<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
					<Line type="monotone" dataKey="total" stroke="#8884d8" />
					<Tooltip></Tooltip>
				</LineChart>
			</ResponsiveContainer>
			
		</div>
	);
};

export default Statistics;
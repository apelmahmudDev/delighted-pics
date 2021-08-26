import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
	const { name, fee, description, img, _id } = props.service;
	const subDescription = description.substr(0, 160);

	return (
		<div className='bg-gray-50 rounded-md p-3 shadow '>
			<div className='overflow-hidden h-52'>
				<img
					className='object-cover h-full w-full rounded transform hover:scale-125 duration-500'
					src={img}
					alt={name}
				/>
			</div>
			<h2 className='text-2xl text-primary font-medium my-2'>{name}</h2>
			<p className='text-gray-700'>{subDescription}</p>

			<h3 className='text-xl font-semibold text-primary my-2'>
				<span className='mr-2'>Service fee:</span>
				<span>${fee}</span>
			</h3>

			<div className='flex items-center justify-between mt-4'>
				<Link to={`/details/${_id}`}>
					<button className='main-btn'>Service details</button>
				</Link>
				<Link to={`/order-info/${_id}`}>
					<button className='main-btn'>Get our service</button>
				</Link>
			</div>
		</div>
	);
};

export default Service;

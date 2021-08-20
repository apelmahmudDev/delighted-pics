import React from 'react';
import Service from '../Service/Service';

const Services = () => {
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-16'>
			<div className='text-center my-16'>
				<h1 className='text-primary text-4xl font-semibold text-gray-700 mb-3'>
					Our Services
				</h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Id
				repudiandae, optio nulla culpa impedit! Eius qui distinctio quas minus
				unde!
			</div>
			<div className='grid grid-cols-3 gap-8'>
				{[1, 2, 4, 5, 6, 7, 8].map((s) => (
					<Service />
				))}
			</div>
		</div>
	);
};

export default Services;

import React from 'react';
import Service from '../Service/Service';

const Services = () => {
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-3 gap-4'>
			{[1, 2, 4, 5, 6, 7, 8].map((s) => (
				<Service />
			))}
		</div>
	);
};

export default Services;

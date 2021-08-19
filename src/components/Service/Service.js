import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
	return (
		<div className='bg-gray-100 rounded-md p-3 shadow-md'>
			<div className='overflow-hidden'>
				<img
					className='transform hover:scale-125 duration-500'
					src='https://www.daily-sun.com/assets/archive/images/print-edition/magazine/2018/April/06-04-2017/Daily-sun-2018-04-06-08-30.jpg'
					alt='weeding photography'
				/>
			</div>
			<h2 className='text-2xl text-primary font-medium my-2'>
				Weeding Photography
			</h2>
			<p className='text-gray-700'>
				Wedding photography is a specialty in photography that is primarily
				focused on the photography of events and activities relating to
				weddings.
			</p>
			<div className='flex items-center justify-between mt-4'>
				<Link to='/details'>
					<button className='cart-btn'>See details</button>
				</Link>
				<Link>
					<button className='cart-btn'>Buy now</button>
				</Link>
			</div>
		</div>
	);
};

export default Service;

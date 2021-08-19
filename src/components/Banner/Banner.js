import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
	return (
		<div className='bg-delight-banner relative bg-cover bg-center bg-no-repeat h-screen w-screen'>
			<Navbar />
			<div>
				<h1 className='text-white text-4xl font-bold'>
					What Type of Photography service <br /> Are You Looking For?
				</h1>
				<div className='flex items-center'>
					<span>
						<SearchIcon className='h-6 w-6' aria-hidden='true' />
					</span>
					<input type='text' placeholder='Type your Photography service...' />
					<button>Search</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;

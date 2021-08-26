import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const SearchBox = () => {
	return (
		<div className='flex items-center justify-center h-96 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
			<div>
				<h1 className='text-white text-2xl sm:text-4xl font-bolder line mb-8 text-center leading-relaxed'>
					What Type of Photography service <br />
					<span>Are You Looking For?</span>
				</h1>
				<div className='flex items-center bg-white h-12 w-full rounded-lg overflow-hidden'>
					<SearchIcon className='w-12 text-gray-400 px-2' aria-hidden='true' />
					<input
						className='w-full focus:outline-none text-lg'
						type='text'
						placeholder='Type your Photography service...'
					/>
					<button className='bg-red-500 hover:bg-red-600 text-white h-full px-8 text-lg font-semibold'>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;

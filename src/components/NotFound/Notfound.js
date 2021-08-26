import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='text-center'>
				<h1 className='text-2xl text-red-500'>Not found the page!</h1>
				<Link to='/'>
					<button className='bg-primary hover:bg-secondary mt-4 py-2 px-4 text-white rounded'>
						<FontAwesomeIcon icon={faArrowLeft} />
						<span className='ml-2'>Back to Home</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Notfound;

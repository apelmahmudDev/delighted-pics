import {
	faFacebook,
	faInstagram,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='bg-primary h-auto p-5'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex sm:justify-around sm:flex-row flex-col gap-11 items-center sm:gap-4'>
				<div>
					<h2 className='text-2xl text-white mb-4'>Our social activities</h2>
					<div className='flex gap-6'>
						<Link to='/'>
							<FontAwesomeIcon icon={faFacebook} size='2x' color='white' />
						</Link>
						<Link to='/'>
							<FontAwesomeIcon icon={faTwitter} size='2x' color='white' />
						</Link>
						<Link to='/'>
							<FontAwesomeIcon icon={faInstagram} size='2x' color='white' />
						</Link>
						<Link to='/'>
							<FontAwesomeIcon icon={faYoutube} size='2x' color='white' />
						</Link>
					</div>
				</div>
				<div>
					<h2 className='text-white text-2xl mb-4'>Get our updates</h2>

					<label className='text-sm block text-white mb-2'>Your Email:</label>
					<input
						className='block p-1 rounded'
						type='email'
						placeholder='Enter your email...'
					/>
					<button className='main-btn mt-4'>Submit</button>
				</div>
			</div>
			<p className='text-white text-sm font-semibold text-center mt-8 pt-3 border-t border-gray-500'>
				<span>
					&copy; All right reserved Delighted Pics - {new Date().getFullYear()}
				</span>
			</p>
		</div>
	);
};

export default Footer;

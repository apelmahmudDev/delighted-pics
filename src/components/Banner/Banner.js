import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBox from '../SearchBox/SearchBox';
import camera from '../../images/camera-smaller.png';

const Banner = () => {
	return (
		<div className='overflow-hidden bg-delight-banner relative bg-cover bg-center bg-no-repeat h-screen w-screen'>
			<Navbar />
			{/* Banner content */}
			<div className='md:flex items-center justify-around '>
				<div>
					<SearchBox />
				</div>
				<div className='rounded-xl border border-gray-500 p-5 shadow-2xl self-center'>
					<img src={camera} alt='banner right camera' className='w-full' />
				</div>
			</div>
		</div>
	);
};

export default Banner;

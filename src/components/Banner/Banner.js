import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBox from '../SearchBox/SearchBox';
import camera from '../../images/camera.png';

const Banner = () => {
	return (
		<div className='overflow-hidden bg-delight-banner relative bg-cover bg-center bg-no-repeat h-screen w-screen'>
			<Navbar />
			{/* Banner content */}
			<div className='md:flex items-center justify-around '>
				<div>
					<SearchBox />
				</div>
				<div>
					<img src={camera} alt='banner right camera' className='w-100' />
				</div>
			</div>
		</div>
	);
};

export default Banner;

import React from 'react';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
	return (
		<div className='bg-delight-banner relative bg-cover bg-center bg-no-repeat h-screen w-screen'>
			<Navbar />
			<div>
				<h1 className='text-white text-8xl font-bold'>Explore the world</h1>
				<p className='text-white text-md'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ipsum
					magni quas veritatis, aut sint voluptates harum facere officia
					reprehenderit pariatur eaque explicabo mollitia minima eius
					voluptatibus architecto totam unde!
				</p>
			</div>
		</div>
	);
};

export default Banner;

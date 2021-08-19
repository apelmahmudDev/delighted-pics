import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBox from '../SearchBox/SearchBox';

const Banner = () => {
	return (
		<div className='bg-delight-banner relative bg-cover bg-center bg-no-repeat h-screen w-screen'>
			<Navbar />
			<SearchBox />
		</div>
	);
};

export default Banner;

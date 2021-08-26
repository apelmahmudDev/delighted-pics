import React from 'react';

const Footer = () => {
	return (
		<div>
			<div>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#00263D'
						fillOpacity='1'
						d='M0,64L80,101.3C160,139,320,213,480,213.3C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
					></path>
				</svg>
			</div>
			<div className='h-8 p-1 bg-gray-300 text-center text-primary'>
				&copy; All right reserved Delighted Pics - {new Date().getFullYear()}
			</div>
		</div>
	);
};

export default Footer;

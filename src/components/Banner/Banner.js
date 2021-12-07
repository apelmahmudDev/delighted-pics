import React from "react";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
	return (
		<div className="overflow-hidden bg-delight-banner relative bg-cover bg-center bg-no-repeat h-screen w-screen">
			<Navbar />
			{/* Banner content */}
			<div className="flex items-center justify-center h-full px-4 sm:px-6 lg:px-8 mx-auto">
				<div>
					<div className="flex">
						<div className="text-white uppercase font-semibold  text-4xl sm:text-8xl md:text-9xl border-8 border-white inline-block p-1 sm:p-4 md:mr-8 mr-3 wow fadeInLeft">
							D
						</div>
						<div className="flex flex-col justify-around">
							<h1 className="text-white text-2xl sm:text-5xl lg:text-7xl uppercase tracking-widest font-semibold wow fadeInDown">
								elighted Pics
							</h1>
							<h3 className="text-white text-md sm:text-3xl lg:text-4xl uppercase font-medium tracking-widest wow fadeInUp">
								Photography Studio
							</h3>
						</div>
					</div>
					<h2 className="text-white text-xl sm:text-3xl my-12 sm:my-16">
						We afford our best quality service and client satisfaction
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Banner;

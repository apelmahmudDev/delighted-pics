import React from "react";
import photographyTypes from "../../lib/data/photographyTypes";

const Types = () => {
	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-20">
			<div className="text-center my-16">
				<h1 className="text-primary text-3xl sm:text-4xl font-semibold text-gray-700 mb-3">
					Photography Types
				</h1>
				<p className="text-primary text-md">
					We have included our photography styles types that's can help you to
					find any services <br /> that you want. We delight with you for this
					awesome
				</p>
			</div>
			{/* photography types */}
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">
				{photographyTypes.map((type) => (
					<div
						key={type.id}
						className="bg-gray-50 rounded-md p-3 shadow sm:h-72 flex justify-center items-center"
					>
						<div className="text-center">
							<img
								className="h-20 inline"
								src={type.image}
								alt="front-camera"
							/>
							<h3 className="text-xl text-primary font-medium my-3">
								{type.title}
							</h3>
							<p className="text-primary text-md">{type.details}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Types;

import React from "react";
import Portrait from "../../images/types/front-camera.png";
import Photojournalism from "../../images/types/photo.png";
import dress from "../../images/types/dress.png";
import sports from "../../images/types/sports.png";
import workLife from "../../images/types/work-life.png";
import architecture from "../../images/types/architecture.png";

const Types = () => {
	const types = [
		{
			id: 1,
			title: "Portrait Photography",
			image: Portrait,
			details:
				"One of the most common photography styles, portrait photography, or portraiture",
		},
		{
			id: 2,
			title: "Photojournalism",
			image: Photojournalism,
			details:
				"One of the most common photography styles, portrait photography, or portraiture",
		},
		{
			id: 3,
			title: "Fashion Photography",
			image: dress,
			details:
				"One of the most common photography styles, portrait photography, or portraiture",
		},
		{
			id: 4,
			title: "Sports Photography",
			image: sports,
			details:
				"One of the most common photography styles, portrait photography, or portraiture",
		},
		{
			id: 5,
			title: "Still Life Photography",
			image: workLife,
			details:
				"One of the most common photography styles, portrait photography, or portraiture",
		},
		{
			id: 6,
			title: "Architectural Photography",
			image: architecture,
			details:
				"One of the most common photography styles, portrait photography, or portraiture",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-20">
			<div className="text-center my-16">
				<h1 className="text-primary text-3xl sm:text-4xl font-semibold text-gray-700 mb-3">
					Photography Types
				</h1>
				<p className="text-primary text-md">
					We have included our photography styles that's can help you to find
					your choose images by <br /> recording light, either electronically by
					means of an image!
				</p>
			</div>
			{/* photography types */}
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">
				{types.map((type) => (
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
							<p>{type.details}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Types;

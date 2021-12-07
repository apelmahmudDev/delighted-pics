import React from "react";
// import photographerPositions from "../../lib/data/photographerPositions";
import positionOneImage from "../../images/position/position1.svg";
import positionTwoImage from "../../images/position/position2.svg";
import positionThreeImage from "../../images/position/position3.svg";
import positionFourImage from "../../images/position/position4.svg";

const ProfessionalPhotographers = () => {
	const photographerPositions = [
		{
			id: 1,
			order: 0,
			border: "tl",
			image: positionOneImage,
			title: "Wide angle",
			details:
				"Get wide angle photo from awesome shoot. It will be gift you nice quality image",
		},
		{
			id: 2,
			order: 1,
			border: "tr",
			image: positionTwoImage,
			title: "Straight forward",
			details:
				"Get straight forward  photo from excellent shoot from us. It will be gift you best quality photos.",
		},
		{
			id: 3,
			order: 0,
			border: "tl",
			image: positionThreeImage,
			title: "Down position",
			details:
				"Right now take your photo from excellent shoot from us. It will be gift you best quality photos.",
		},
		{
			id: 4,
			order: 1,
			border: "tr",
			image: positionFourImage,
			title: "Favourite fashion",
			details:
				"Stand with your favourite  fashion We will take your photo with our high resolution DSLR.",
		},
	];

	return (
		<div className="bg-gray-50">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-16">
				<div className="text-center py-16">
					<h1 className="text-primary text-3xl sm:text-4xl font-semibold text-gray-700 mb-3">
						Professional photographers
					</h1>
					<p className="text-primary text-md">
						We have professional photographers. So, don't worry about picture
						quality. <br /> Also, have big budget light facilities for an
						awesome photo
					</p>
				</div>

				{/* photographers position*/}
				<div className="py-8">
					{/* {photographerPositions.map((position) => (
						<div
							key={position.id}
							className="sm:flex items-center justify-center"
						>
							<div className={`text-center order-${position?.order}`}>
								<img
									className="h-72 inline"
									src={position.image}
									alt={position.title}
								/>
							</div>
							<div
								className={`sm:w-1/2 shadow p-3 bg-white border border-gray-200 sm:rounded-${position?.border}-3xl`}
							>
								<h3 className="text-xl text-primary font-medium my-2">
									{position.title}
								</h3>
								<p className="text-primary text-md my-2">{position.details}</p>
							</div>
						</div>
					))} */}
					<div className="sm:flex items-center justify-center">
						<div className="text-center order-0 wow slideInLeft">
							<img
								className="h-72 inline"
								src={positionOneImage}
								alt="Wide angle"
							/>
						</div>
						<div className="sm:w-1/2 shadow p-3 bg-white border border-gray-200 sm:rounded-tl-3xl wow slideInRight">
							<h3 className="text-xl text-primary font-medium my-2">
								Wide angle
							</h3>
							<p className="text-primary text-md my-2">
								Get wide angle photo from awesome shoot. It will be gift you
								nice quality image
							</p>
						</div>
					</div>
					<div className="sm:flex items-center justify-center">
						<div className="text-center order-1 wow slideInRight">
							<img
								className="h-72 inline"
								src={positionTwoImage}
								alt="Straight forward"
							/>
						</div>
						<div className="sm:w-1/2 shadow p-3 bg-white border border-gray-200 sm:rounded-tr-3xl wow slideInLeft">
							<h3 className="text-xl text-primary font-medium my-2">
								Straight forward
							</h3>
							<p className="text-primary text-md my-2">
								Get straight forward photo from excellent shoot from us. It will
								be gift you best quality photos.
							</p>
						</div>
					</div>
					<div className="sm:flex items-center justify-center">
						<div className="text-center order-0 wow slideInLeft">
							<img
								className="h-72 inline"
								src={positionThreeImage}
								alt="Down position"
							/>
						</div>
						<div className="sm:w-1/2 shadow p-3 bg-white border border-gray-200 sm:rounded-tl-3xl wow slideInRight">
							<h3 className="text-xl text-primary font-medium my-2">
								Down position
							</h3>
							<p className="text-primary text-md my-2">
								Right now take your photo from excellent shoot from us. It will
								be gift you best quality photos.
							</p>
						</div>
					</div>
					<div className="sm:flex items-center justify-center">
						<div className="text-center order-1 wow slideInRight">
							<img
								className="h-72 inline"
								src={positionFourImage}
								alt="Down position"
							/>
						</div>
						<div className="sm:w-1/2 shadow p-3 bg-white border border-gray-200 sm:rounded-tr-3xl wow slideInLeft">
							<h3 className="text-xl text-primary font-medium my-2">
								Favorite fashion
							</h3>
							<p className="text-primary text-md my-2">
								Stand with your favorite fashion We will take your photo with
								our high resolution DSLR.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfessionalPhotographers;

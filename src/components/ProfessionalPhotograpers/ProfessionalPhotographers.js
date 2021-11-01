import React from "react";
import photographerPositions from "../../lib/data/photographerPositions";

const ProfessionalPhotographers = () => {
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
					{photographerPositions &&
						photographerPositions.map((position) => (
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
									<p className="text-primary text-md my-2">
										{position.details}
									</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default ProfessionalPhotographers;

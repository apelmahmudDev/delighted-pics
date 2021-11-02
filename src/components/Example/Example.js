import React, { useEffect } from "react";
import "./Example.css";
import { useAuth } from "../../contexts/AuthContext";
import photoExample1 from "../../images/example/example2.jpg";
import photoExample2 from "../../images/example/example2.jpg";
import photoExample3 from "../../images/example/example3.jpg";
import photoExample4 from "../../images/example/example4.jpg";
import photoExample5 from "../../images/example/example5.jpg";
import photoExample6 from "../../images/example/example6.jpg";
import photoExample7 from "../../images/example/example7.jpg";
import photoExample8 from "../../images/example/example8.jpg";
import ExampleNavigation from "./ExampleNavigation/ExampleNavigation";

const Example = () => {
	const { setIsNavigate } = useAuth();

	useEffect(() => {
		setIsNavigate(true);
	});

	const photoExamples = [
		{ id: 1, image: photoExample1, spreadArea: "row-span-2 col-span-2" },
		{ id: 2, image: photoExample2 },
		{ id: 3, image: photoExample3, spreadArea: "col-span-2" },
		{ id: 4, image: photoExample4 },
		{ id: 5, image: photoExample5, spreadArea: "row-span-2" },
		{ id: 6, image: photoExample6, spreadArea: "row-span-2 col-span-2" },
		{ id: 7, image: photoExample7, spreadArea: "col-span-2" },
		{ id: 8, image: photoExample8, spreadArea: "row-span-2" },
	];

	return (
		<div className="max-w-7xl mx-auto px-2 mb-16">
			<ExampleNavigation />

			<div className="container grid grid-flow-row-dense gap-4">
				{photoExamples.map((image) => (
					<div key={image.id} className={`${image.spreadArea}`}>
						<img
							className="w-full h-full object-cover"
							src={image.image}
							alt="photoExample1"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Example;

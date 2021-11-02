import React from "react";
import { NavLink } from "react-router-dom";

const ExampleNavigation = () => {
	const categoriesLink = [
		{ id: 1, name: "All", link: "all", active: true },
		{ id: 2, name: "3D Photos", link: "3d-photos" },
		{ id: 3, name: "Lifestyle", link: "lifestyle" },
		{ id: 4, name: "Food", link: "food" },
		{ id: 5, name: "Interior ", link: "interior " },
		{ id: 6, name: "Weeding  ", link: "weeding " },
		{ id: 7, name: "Flowers   ", link: "flowers " },
	];
	return (
		<div className="mb-8 py-5">
			<nav className="border rounded flex gap-3 md:gap-8 flex-wrap px-4">
				{categoriesLink.map((link) => (
					<div
						key={link.id}
						className={`text-sm text-primary hover:text-purple-900 hover:font-medium border-b-2 border-white hover:border-purple-900 py-4 ${
							link.active && `border-b-2 border-purple-900`
						}`}
					>
						<NavLink to="#">{link.name}</NavLink>
					</div>
				))}
			</nav>
		</div>
	);
};

export default ExampleNavigation;

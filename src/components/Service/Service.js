import React from "react";
import { Link } from "react-router-dom";

// react loading skeleton
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const Service = (props) => {
	const { name, fee, description, img, _id } = props.service;
	const subDescription = description.substr(0, 160);

	return (
		<div className="bg-gray-50 rounded-md p-3 shadow ">
			<div className="overflow-hidden h-52">
				<img
					className="object-cover h-full w-full rounded transform hover:scale-125 duration-500"
					src={img}
					alt={name}
				/>
			</div>
			<h2 className="text-2xl text-primary font-medium my-2">{name}</h2>
			<p className="text-gray-700">{subDescription}</p>
			<h3 className="text-xl font-semibold text-primary my-2">
				<span className="mr-2">Service fee:</span>
				<span>${fee}</span>
			</h3>
			<div className="sm:flex items-center justify-between mt-4 w-full">
				<Link to={`/details/${_id}`}>
					<button className="main-btn w-full my-1">Service details</button>
				</Link>
				<Link to={`/order-info/${_id}`}>
					<button className="main-btn w-full my-1">Get our service</button>
				</Link>
			</div>
		</div>
	);
};

export default Service;

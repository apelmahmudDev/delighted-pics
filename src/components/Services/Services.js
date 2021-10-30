import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import ServicesSkeleton from "../../lib/skeleton/ServicesSkeleton";

const Services = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false);

	// fetch all service data from database
	useEffect(() => {
		const fetchServices = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					"https://fierce-river-40368.herokuapp.com/loadServices"
				);
				const data = await response.json();
				setServices(data);
			} catch (error) {
				console.log("err", error);
			}
			setLoading(false);
		};
		fetchServices();
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-16">
			<div className="text-center my-16">
				<h1 className="text-primary text-3xl sm:text-4xl font-semibold text-gray-700 mb-3">
					Our Services
				</h1>
				<p className="text-primary text-md">
					Photography is the art, application, and practice of creating durable
					images by <br /> recording light, either electronically by means of an
					image!
				</p>
			</div>

			{/* loading skeleton */}
			{loading && (
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">
					{services.map((service) => (
						<ServicesSkeleton key={service._id}></ServicesSkeleton>
					))}
				</div>
			)}
			{/* service */}
			{!loading && (
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">
					{services.map((service) => (
						<Service key={service._id} service={service}></Service>
					))}
				</div>
			)}
		</div>
	);
};

export default Services;

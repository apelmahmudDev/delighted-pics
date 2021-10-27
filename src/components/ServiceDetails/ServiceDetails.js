import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
	const { setIsNavigate } = useAuth();
	const [service, setService] = useState({});
	const [loading, setLoading] = useState(false);
	const { serviceId } = useParams();

	useEffect(() => {
		setIsNavigate(true);
	});

	// load one service by service id
	useEffect(() => {
		const fetchService = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://fierce-river-40368.herokuapp.com/loadService/${serviceId}`
				);
				const data = await response.json();
				setService(data);
			} catch (error) {
				console.log("err", error);
			}
			setLoading(false);
		};
		fetchService();
	}, [serviceId]);

	return (
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-16">
			{/* <div className="text-center mt-4 h-screen"> */}
			{loading ? (
				<div className="text-2xl">Loading...</div>
			) : (
				<div className="grid md:grid-cols-2 gap-5 bg-gray-50 rounded-md p-5 shadow ">
					<div>
						<img src={service?.img} alt="" />
					</div>
					<div>
						<h2 className="text-2xl sm:text-3xl font-medium text-primary">
							{service?.name}
						</h2>
						<h4 className="uppercase text-red-600 text-lg font-light my-4">
							Face your service
						</h4>
						<p className="text-lg text-gray-700">{service?.description}</p>

						<div className="my-4">
							<div className="text-primary font-light">
								Service fee: ${service?.fee}
							</div>

							<div className="text-primary font-light">
								Picture quality: {service?.quality}
							</div>
						</div>

						<Link to={`/order-info/${service?._id}`}>
							<button className="main-btn w-full my-1">Get our service</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default ServiceDetails;

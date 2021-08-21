import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Services = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false);
	// // add all services to mongodb
	// const handleService = async () => {
	// 	try {
	// 		const url = 'http://localhost:5000/addServices';
	// 		const option = {
	// 			method: 'POST',
	// 			body: JSON.stringify(serviceData),
	// 			headers: {
	// 				'Content-type': 'application/json; charset=UTF-8',
	// 			},
	// 		};
	// 		const response = await fetch(url, option);
	// 		const data = await response.json();
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.log('err', error);
	// 	}
	// };

	// fetch all service data from database
	useEffect(() => {
		const fetchServices = async () => {
			try {
				setLoading(true);
				const response = await fetch('http://localhost:5000/loadServices');
				const data = await response.json();
				setServices(data);
			} catch (error) {
				console.log('err', error);
			}
			setLoading(false);
		};
		fetchServices();
	}, []);

	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-16'>
			<div className='text-center my-16'>
				<h1 className='text-primary text-4xl font-semibold text-gray-700 mb-3'>
					Our Services
				</h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Id
				repudiandae, optio nulla culpa impedit! Eius qui distinctio quas minus
				unde!
			</div>
			{/* service */}
			{loading && <div className='text-xl text-center'>Loading...</div>}
			{!loading && (
				<div className='grid grid-cols-3 gap-8'>
					{services.map((service) => (
						<Service key={service._id} service={service}></Service>
					))}
				</div>
			)}
		</div>
	);
};

export default Services;

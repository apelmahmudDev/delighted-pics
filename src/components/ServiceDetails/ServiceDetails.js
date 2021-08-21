import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
	const [service, setService] = useState({});
	const [loading, setLoading] = useState(false);
	const { serviceId } = useParams();

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
				console.log('err', error);
			}
			setLoading(false);
		};
		fetchService();
	}, [serviceId]);

	return (
		<div className='text-center mt-4'>
			{loading ? (
				<div className='text-2xl'>Loading...</div>
			) : (
				<div>
					{' '}
					<h4 className='uppercase text-md text-red-500'>Face Your Service</h4>
					<h1 className='my-8 text-6xl text-primary font-light'>
						{service.name}
					</h1>
					<div className='w-8/12 mx-auto text-2xl font-light text-gray-600 leading-relaxed'>
						<p>{service.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ServiceDetails;

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const OrderInfo = () => {
	const [service, setService] = useState({});
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const { buyId } = useParams();
	const { currentUser, setIsNavigate } = useAuth();
	let history = useHistory();

	// navigation changer
	useEffect(() => {
		setIsNavigate(true);
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const orderInfo = {
			...data,
			serviceName: service.name,
			fee: service.fee,
			quality: service.quality,
			status: 'Progressing',
			date: new Date(),
		};
		// add orders info at mongodb
		try {
			setMessage('');
			setLoading(true);
			const url = 'https://fierce-river-40368.herokuapp.com/addOrder';
			const option = {
				method: 'POST',
				body: JSON.stringify(orderInfo),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			};
			const response = await fetch(url, option);
			const data = await response.json();
			if (data) {
				setMessage('Your order successfully placed to us!');
				history.push('/checkout');
			}
		} catch (error) {
			console.log('err', error);
		}
	};

	// load one service by service id
	useEffect(() => {
		const fetchService = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://fierce-river-40368.herokuapp.com/loadService/${buyId}`
				);
				const data = await response.json();
				setService(data);
			} catch (error) {
				console.log('err', error);
			}
			setLoading(false);
		};
		fetchService();
	}, [buyId]);

	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			<div className='my-4'>
				<h2 className='text-2xl text-primary font-lighter'>
					Your service {service.name}
				</h2>
				<p className='text-lg text-primary'>
					Service fee $<span>{service.fee}</span>
				</p>
			</div>

			<div className='shadow border p-4 rounded-lg'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='my-8'>
						<label className='text-primary font-semibold'>Name</label>
						<input
							defaultValue={currentUser?.displayName || ''}
							{...register('name', { required: true })}
							placeholder='Enter your name'
							className='form-control border'
						/>
						{errors.name && (
							<span className='text-red-500 italic text-sm'>
								Name field is required
							</span>
						)}
					</div>
					<div className='my-8'>
						<label className='text-primary font-semibold'>Email</label>
						<input
							defaultValue={currentUser?.email || ''}
							{...register('email', { required: true })}
							placeholder='Enter your Email'
							className='form-control border'
						/>
						{errors.email && (
							<span className='text-red-500 italic text-sm'>
								Email field is required
							</span>
						)}
					</div>
					<div className='my-8'>
						<label className='text-primary font-semibold'>Phone</label>
						<input
							{...register('phone', { required: true })}
							placeholder='Phone number'
							className='form-control border'
						/>
						{errors.phone && (
							<span className='text-red-500 italic text-sm'>
								Phone field is required
							</span>
						)}
					</div>
					<div className='my-8'>
						<label className='text-primary font-semibold'>Address</label>
						<input
							{...register('address', { required: true })}
							placeholder='Address'
							className='form-control border'
						/>
						{errors.address && (
							<span className='text-red-500 italic text-sm'>
								Address field is required
							</span>
						)}
					</div>
					<div className='flex items-center'>
						<input
							type='submit'
							disabled={loading}
							value='Order now'
							className='p-2  bg-primary hover:bg-secondary text-white uppercase rounded'
						/>
						<p className='text-md text-green-500 ml-4'>{message}</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default OrderInfo;

import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';

const OrderInfo = () => {
	const { currentUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			<div className='shadow border p-4 rounded-lg'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='my-8'>
						<label className='text-primary font-semibold'>Name</label>
						<input
							defaultValue={currentUser?.displayName || 'David doll'}
							{...register('name', { required: true })}
							placeholder='Enter your name'
							className='form-control'
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
							defaultValue={currentUser?.email || 'example@gmail.com'}
							{...register('email', { required: true })}
							placeholder='Enter your Email'
							className='form-control'
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
							className='form-control'
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
							className='form-control'
						/>
						{errors.address && (
							<span className='text-red-500 italic text-sm'>
								Address field is required
							</span>
						)}
					</div>
					<input
						type='submit'
						value='Submit'
						className='p-2  bg-purple-400 hover:bg-purple-600 text-white uppercase rounded'
					/>
				</form>
			</div>
		</div>
	);
};

export default OrderInfo;

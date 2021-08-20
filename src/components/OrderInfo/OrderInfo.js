import React from 'react';
import { useForm } from 'react-hook-form';

const OrderInfo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div className='shadow'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='my-8'>
					<label className='text-primary font-semibold'>Name</label>
					<input
						defaultValue='David Doll'
						{...register('nameRequired', { required: true })}
						placeholder='Enter your name'
						className='form-control'
					/>
					{errors.nameRequired && (
						<span className='text-red-500 italic text-sm'>
							Name field is required
						</span>
					)}
				</div>
				<div className='my-8'>
					<label className='text-primary font-semibold'>Name</label>
					<input
						defaultValue='test'
						{...register('exampleRequired', { required: true })}
						placeholder='Enter your name'
						className='form-control'
					/>
					{errors.exampleRequired && (
						<span className='text-red-500 italic text-sm'>
							This field is required
						</span>
					)}
				</div>
				<input type='submit' value='Submit' className='p-2  bg-purple-400' />
			</form>
		</div>
	);
};

export default OrderInfo;

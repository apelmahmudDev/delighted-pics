import React from 'react';

const AddService = () => {
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			<div className='bg-white rounded-xl p-4'>
				<div className='mt-4 flex justify-around'>
					<div>
						<div className='mb-4'>
							<label className='font-semibold'>Service Name</label>
							<input
								type='text'
								className='form-control'
								placeholder='Enter service name'
							/>
						</div>
						<div className='mb-4'>
							<label className='font-semibold'>Add Fee</label>
							<input
								type='text'
								className='form-control'
								placeholder='Enter service fee'
							/>
						</div>
						<div className='mb-4'>
							<label className='font-semibold'>Description</label>
							<textarea
								type='text'
								rows='4'
								className='form-control'
								placeholder='Enter Service description'
							/>
						</div>
					</div>
					<div>
						<div className='mb-4'>
							<label className='font-semibold'>Quality</label>
							<input
								type='text'
								className='form-control'
								placeholder='Enter service quality'
							/>
						</div>
						<div className='mb-4'>
							<label className='font-semibold'>Add Photo</label>
							<input type='file' className='form-control' />
						</div>
					</div>
				</div>
				<div className='text-right'>
					<button className='px-4 py-2 rounded text-primary border cart-btn'>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddService;

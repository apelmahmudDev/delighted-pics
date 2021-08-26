import React, { useRef, useState } from 'react';

const AddService = () => {
	const [message, setMessage] = useState('');
	// catch input value by using useRef hook
	const nameRef = useRef();
	const feeRef = useRef();
	const descriptionRef = useRef();
	const qualityRef = useRef();
	const photoRef = useRef();

	// handle add service and save at the database
	const handleAddService = async (e) => {
		e.preventDefault();
		const service = {
			name: nameRef.current.value,
			fee: feeRef.current.value,
			quality: qualityRef.current.value,
			img: photoRef.current.value,
			description: descriptionRef.current.value,
		};
		// add service info at mongodb
		try {
			setMessage('');
			const url = 'https://fierce-river-40368.herokuapp.com/addService';
			const option = {
				method: 'POST',
				body: JSON.stringify(service),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			};
			const response = await fetch(url, option);
			const data = await response.json();
			if (data) {
				setMessage('Your service added into database successfully.');
				nameRef.current.value = '';
				feeRef.current.value = '';
				qualityRef.current.value = '';
				descriptionRef.current.value = '';
			}
		} catch (error) {
			console.log('err', error);
		}
	};

	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			<div className='bg-white rounded-xl p-4'>
				<form onSubmit={handleAddService}>
					<div className='mt-4 md:flex justify-around gap-2'>
						<div>
							<div className='mb-4'>
								<label className='font-semibold'>Service Name</label>
								<input
									type='text'
									ref={nameRef}
									className='form-control'
									required
									placeholder='Enter service name'
								/>
							</div>
							<div className='mb-4'>
								<label className='font-semibold'>Add Fee</label>
								<input
									type='text'
									ref={feeRef}
									className='form-control'
									required
									placeholder='Enter service fee'
								/>
							</div>
							<div className='mb-4'>
								<label className='font-semibold'>Description</label>
								<textarea
									type='text'
									ref={descriptionRef}
									rows='4'
									className='form-control'
									required
									placeholder='Enter Service description'
								/>
							</div>
						</div>
						<div>
							<div className='mb-4'>
								<label className='font-semibold'>Quality</label>
								<input
									type='text'
									ref={qualityRef}
									className='form-control'
									required
									placeholder='Enter service quality'
								/>
							</div>
							<div className='mb-4'>
								<label className='font-semibold'>Add Photo</label>
								<input type='file' ref={photoRef} className='form-control' />
							</div>
						</div>
					</div>
					<div className='text-right'>
						<div className='text-md text-green-500 mb-4'>{message}</div>
						<input
							type='submit'
							className='px-4 py-2 rounded text-primary border main-btn'
							value='Save'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddService;

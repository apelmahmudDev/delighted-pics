import React from 'react';

const AddAdmin = () => {
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			<div className='bg-white rounded-xl p-4'>
				<form>
					<label className='font-semibold'>Admin Name</label>
					<input
						type='text'
						className='form-control'
						placeholder='Enter admin name'
					/>
					<input type='submit' value='Save' className='main-btn my-4' />
				</form>
			</div>
		</div>
	);
};

export default AddAdmin;

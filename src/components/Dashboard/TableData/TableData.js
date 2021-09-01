import React from 'react';
import { PhotographIcon, TrashIcon } from '@heroicons/react/outline';

const TableData = ({ order, serviceDelete }) => {
	// update status done/progress
	const handleStatusChange = async (e) => {
		const value = e.target.value;
		try {
			const url = `https://fierce-river-40368.herokuapp.com/updateStatus/${order._id}`;
			const option = {
				method: 'PATCH',
				body: JSON.stringify({ value }),
				headers: {
					'Content-Type': 'application/json',
				},
			};
			await fetch(url, option);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<tr key={order._id}>
			<td className='px-3 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='flex-shrink-0 h-10 w-10'>
						<PhotographIcon className='h-10 w-10 rounded-full text-primary' />
					</div>
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>
							{/* service name */}
							{order.serviceName}
						</div>
					</div>
				</div>
			</td>
			<td className='px-3 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='ml-4'>
						{/* service fee */}
						<div className='text-sm font-medium text-gray-900'>{order.fee}</div>
					</div>
				</div>
			</td>
			<td className='px-3 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='text-sm font-medium text-gray-900'>
						{/* service quality */}
						{order.quality}
					</div>
				</div>
			</td>
			<td className='px-3 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='text-sm font-medium text-gray-900'>
						{/* orders name */}
						{order.name}
					</div>
				</div>
			</td>
			<td className='px-3 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='text-sm font-medium text-gray-900'>
						{/* orders email */}
						{order.email}
					</div>
				</div>
			</td>
			<td className='px-3 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='text-sm font-medium text-gray-900'>
						{/* order status -> progressing / done */}
						<select defaultValue={order.status} onChange={handleStatusChange}>
							<option value='progressing'>Progressing</option>
							<option value='done'>Done</option>
						</select>
					</div>
				</div>
			</td>
			<td className='px-3 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='ml-4'>
						{/* service delete button*/}
						<button
							onClick={() => serviceDelete(order._id)}
							className='text-sm font-medium text-gray-900'
						>
							<TrashIcon className='w-8 cursor-pointer text-red-500 hover:text-red-600' />
						</button>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default TableData;

import React from 'react';
import { PhotographIcon, TrashIcon } from '@heroicons/react/outline';

const CheckoutTableData = ({ order, handleDeleteService }) => {
	return (
		<tr key={order._id}>
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='flex-shrink-0 h-10 w-10'>
						<PhotographIcon className='h-10 w-10 rounded-full text-primary' />
					</div>
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>
							{order.serviceName}
						</div>
					</div>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>{order.fee}</div>
					</div>
				</div>
			</td>

			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>
							{order.quality}
						</div>
					</div>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='text-sm font-medium text-gray-900'>
						{order.status}
					</div>
				</div>
			</td>
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>
							<TrashIcon
								onClick={() => handleDeleteService(order._id)}
								className='w-8 cursor-pointer text-red-500 hover:text-red-600'
							/>
						</div>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default CheckoutTableData;

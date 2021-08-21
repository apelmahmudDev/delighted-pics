import { PhotographIcon, TrashIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Checkout = () => {
	const { currentUser } = useAuth();
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	// fetch specific customer orders from database
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://fierce-river-40368.herokuapp.com/customerOrders?email=${currentUser.email}`
				);
				const data = await response.json();
				setOrders(data);
			} catch (error) {
				console.log('err', error);
			}
			setLoading(false);
		};
		fetchOrders();
	}, [currentUser.email]);

	const tableHeader = [
		'Services',
		'Service fee',
		'quality',
		'Status',
		'Remove',
	];
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			{loading && <div className='text-center text-lg'>Loading...</div>}
			{!loading && (
				<div className='flex flex-col'>
					<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
							<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
								<table className='min-w-full divide-y divide-gray-200'>
									<thead className='bg-gray-50'>
										<tr>
											{tableHeader.map((header) => (
												<th
													key={header}
													scope='col'
													className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
												>
													{header}
												</th>
											))}
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gray-200'>
										{orders.map((order) => (
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
															<div className='text-sm font-medium text-gray-900'>
																{order.fee}
															</div>
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
																<TrashIcon className='w-8 cursor-pointer text-red-500 hover:text-red-600' />
															</div>
														</div>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;

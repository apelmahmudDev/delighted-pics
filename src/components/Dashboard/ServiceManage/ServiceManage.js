import { PhotographIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';

const ServiceManager = () => {
	const services = [
		{ name: 'Weeding photography', fee: 345, quantity: 2, status: 'pending' },
		{ name: 'Costume photography', fee: 345, quantity: 2, status: 'pending' },
		{ name: 'Scenery photography', fee: 345, quantity: 2, status: 'pending' },
	];
	const tableHeader = [
		'Services',
		'Service fee',
		'Quantity',
		'Status',
		'Remove',
	];
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-50'>
									<tr>
										{tableHeader.map((header) => (
											<th
												scope='col'
												className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
											>
												{header}
											</th>
										))}
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{services.map((service) => (
										<tr key={service.email}>
											<td className='px-6 py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='flex-shrink-0 h-10 w-10'>
														<PhotographIcon className='h-10 w-10 rounded-full text-primary' />
													</div>
													<div className='ml-4'>
														<div className='text-sm font-medium text-gray-900'>
															{service.name}
														</div>
													</div>
												</div>
											</td>
											<td className='px-6 py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='ml-4'>
														<div className='text-sm font-medium text-gray-900'>
															{service.fee}
														</div>
													</div>
												</div>
											</td>
											<td className='px-6 py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='ml-4'>
														<div className='text-sm font-medium text-gray-900'>
															{service.quantity}
														</div>
													</div>
												</div>
											</td>
											<td className='px-6 py-4 whitespace-nowrap'>
												<div className='flex items-center'>
													<div className='text-sm font-medium text-gray-900'>
														<select>
															<option selected value='pending'>
																Pending
															</option>
															<option value='send'>Send</option>
															<option value='done'>Done</option>
														</select>
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
		</div>
	);
};

export default ServiceManager;

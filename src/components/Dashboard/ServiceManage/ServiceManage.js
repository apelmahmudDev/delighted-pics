import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TableData from '../TableData/TableData';

const ServiceManager = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);
	const [deleteMessage, setDeleteMessage] = useState('');
	const [isDelete, setIsDelete] = useState(false);

	// fetch all orders data from database
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					'https://fierce-river-40368.herokuapp.com/loadAllOrders'
				);
				const data = await response.json();
				setOrders(data);
			} catch (error) {
				console.log('err', error);
			}
			setLoading(false);
		};
		fetchOrders();
	}, []);

	// service delete from dashboard
	const serviceDelete = async (serviceId) => {
		try {
			setDeleteMessage('');
			const url = `https://fierce-river-40368.herokuapp.com/delete/${serviceId}`;
			const option = {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			};
			const response = await fetch(url, option);
			const data = await response.json();
			if (data) {
				setIsDelete(true);
				setDeleteMessage('Service deleted successfully');
				setTimeout(() => {
					setIsDelete(false);
					setDeleteMessage('');
					window.location.reload();
				}, 3000);
			}
		} catch (error) {
			console.log('err', error);
		}
	};

	// table header name
	const tableHeader = [
		'Services',
		'Service fee',
		'Quality',
		'User',
		'Email',
		'Status',
		'Remove',
	];
	return (
		<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-12'>
			{loading && (
				<div className='text-center'>
					<FontAwesomeIcon
						icon={faSpinner}
						spin
						size='3x'
						className='text-primary'
					/>
				</div>
			)}
			{!loading && (
				<div className='flex flex-col'>
					<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
							<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
								{/* Service deleted massage */}
								{isDelete && (
									<div className='text-right'>
										<h1 className='bg-white text-green-500 px-3 py-1  font-semibold inline-block'>
											<FontAwesomeIcon className=' mr-3' icon={faCheck} />
											<span>{deleteMessage}</span>
										</h1>
									</div>
								)}

								<table className='min-w-full divide-y divide-gray-200'>
									<thead className='bg-gray-50'>
										<tr>
											{tableHeader.map((header, index) => (
												<th
													key={index}
													scope='col'
													className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
												>
													{header}
												</th>
											))}
										</tr>
									</thead>
									{/* table data / orders*/}
									<tbody className='bg-white divide-y divide-gray-200'>
										{orders.map((order) => (
											<TableData
												key={order._id}
												order={order}
												serviceDelete={serviceDelete}
											/>
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

export default ServiceManager;

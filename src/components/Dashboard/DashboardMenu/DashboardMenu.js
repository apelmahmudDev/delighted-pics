import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
	const navigation = [
		{ name: 'Manage Service', link: 'manage', exact: true },
		{ name: 'Add Service', link: 'add-service' },
		{ name: 'Add Admin', link: 'add-admin' },
	];
	return (
		<div className='flex flex-col gap-5 px-4'>
			{navigation.map((item) => (
				<Link key={item.name} to={`/dashboard/${item.link}`}>
					<span>{item.name}</span>
				</Link>
			))}
			<Link to='/'>
				<span>Back</span>
			</Link>
		</div>
	);
};

export default DashboardMenu;

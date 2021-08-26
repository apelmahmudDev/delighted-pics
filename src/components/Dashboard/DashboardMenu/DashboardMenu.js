import {
	faArrowLeft,
	faPlus,
	faThLarge,
	faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
	const navigation = [
		{
			name: 'Manage Service',
			link: 'manage',
			exact: true,
			icon: <FontAwesomeIcon icon={faThLarge} />,
		},
		{
			name: 'Add Service',
			link: 'add-service',
			icon: <FontAwesomeIcon icon={faPlus} />,
		},
		{
			name: 'Add Admin',
			link: 'add-admin',
			icon: <FontAwesomeIcon icon={faUserEdit} />,
		},
	];
	return (
		<div className='flex flex-col gap-5 px-4'>
			{navigation.map((item) => (
				<Link key={item.name} to={`/dashboard/${item.link}`}>
					{item.icon}
					<span className='ml-2'>{item.name}</span>
				</Link>
			))}
			<Link to='/'>
				<FontAwesomeIcon className='mr-2' icon={faArrowLeft} />
				<span>Back</span>
			</Link>
		</div>
	);
};

export default DashboardMenu;

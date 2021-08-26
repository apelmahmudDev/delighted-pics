import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import DashboardMenu from './DashboardMenu/DashboardMenu';
import ServiceManage from './ServiceManage/ServiceManage';
import dashboardLogo from '../../images/logo/nav-logo-light.svg';

const Dashboard = () => {
	return (
		<div className='h-screen md:grid md:grid-cols-6'>
			<div className='text-white bg-primary pt-2 pb-4'>
				<Link to='/'>
					<div className='my-8 ml-4'>
						<img src={dashboardLogo} alt='logo' />
					</div>
				</Link>
				<DashboardMenu />
			</div>
			{/* Route */}
			<div className='col-span-5 bg-gray-200'>
				<Switch>
					<Route path='/dashboard/manage'>
						<ServiceManage />
					</Route>
					<Route path='/dashboard/add-service'>
						<AddService />
					</Route>
					<Route path='/dashboard/add-admin'>
						<AddAdmin />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default Dashboard;

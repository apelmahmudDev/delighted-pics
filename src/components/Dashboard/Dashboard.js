import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import DashboardMenu from './DashboardMenu/DashboardMenu';
import ServiceManage from './ServiceManage/ServiceManage';

const Dashboard = () => {
	return (
		<div className='h-screen grid grid-cols-6'>
			<div className='text-white' style={{ backgroundColor: '#203D37' }}>
				<Link to='/' className=' text-white inline-block'>
					<h4 className='uppercase my-4 text-center'>Delighted Pics</h4>
					<DashboardMenu />
				</Link>
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

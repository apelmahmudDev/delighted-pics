import React from 'react';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Signup/Login';
import Notfound from './components/NotFound/Notfound';
import Checkout from './components/Checkout/Checkout';
import Dashboard from './components/Dashboard/Dashboard';
import OrderInfo from './components/OrderInfo/OrderInfo';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Banner />
						<Services />
						<Footer />
					</Route>
					<Route path='/home'>
						<Banner />
						<Services />
						<Footer />
					</Route>
					<Route path='/details/:serviceId'>
						<ServiceDetails />
						<Footer />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<PrivateRoute path='/checkout'>
						<Navbar />
						<Checkout />
					</PrivateRoute>
					<PrivateRoute path='/dashboard'>
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path='/order-info/:buyId'>
						<OrderInfo />
					</PrivateRoute>
					<Route path='*'>
						<Notfound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

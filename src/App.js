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

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Banner />
					<Services />
				</Route>
				<Route path='/home'>
					<Banner />
					<Services />
				</Route>
				<Route path='/details'>
					<Navbar />
					<ServiceDetails />
				</Route>
				<Route path='/login'>
					<Navbar />
					<Login />
				</Route>
				<Route path='/signup'>
					<Navbar />
					<Signup />
				</Route>
				<Route path='/checkout'>
					<Navbar />
					<Checkout />
				</Route>
				<Route path='*'>
					<Notfound />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

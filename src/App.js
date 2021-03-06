import React, { useEffect } from "react";
import Banner from "./components/Banner/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Signup/Login";
import Notfound from "./components/NotFound/Notfound";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import Types from "./components/Types/Types";
import ProfessionalPhotographers from "./components/ProfessionalPhotograpers/ProfessionalPhotographers";
import Example from "./components/Example/Example";
import WOW from "wowjs";

const App = () => {
	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);

	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Banner />
						<Services />
						<ProfessionalPhotographers />
						<Types />
						<Footer />
					</Route>
					<Route path="/home">
						<Banner />
						<Services />
						<ProfessionalPhotographers />
						<Types />
						<Footer />
					</Route>
					<Route path="/example">
						<Navbar />
						<Example />
						<Footer />
					</Route>
					<Route path="/details/:serviceId">
						<Navbar />
						<ServiceDetails />
						<Footer />
					</Route>
					<Route path="/login">
						<Navbar />
						<Login />
					</Route>
					<Route path="/signup">
						<Navbar />
						<Signup />
					</Route>
					<PrivateRoute path="/checkout">
						<Navbar />
						<Checkout />
					</PrivateRoute>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path="/order-info/:buyId">
						<Navbar />
						<OrderInfo />
					</PrivateRoute>
					<Route path="*">
						<Notfound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

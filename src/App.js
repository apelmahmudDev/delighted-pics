import React from 'react';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';

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
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

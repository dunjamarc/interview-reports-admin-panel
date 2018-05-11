import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import HomePage from './pages/HomePage/HomePage';
import SubmitReport from './pages/SubmitReport/SubmitReport';
import { Switch, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/submit' component={SubmitReport} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;

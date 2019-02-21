import React, { Component } from 'react';
import {
	  NavLink,
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Homepage from './components/HomepageComponent';
import Cohorts from './components/CohortsComponent';
import Trainees from './components/TraineesComponent';
import Account from './components/AccountComponent';
import Register from './components/RegisterComponent';
import Login from './components/LoginComponent';

class Routes extends Component {
  render() {
  	return (
  	<div>
		<Route exact path="/" component={ Homepage } />
		<Route exact path="/home" component={ Homepage } />
		<Route exact path="/cohorts" component={ Cohorts } />
		<Route exact path="/trainees" component={ Trainees } />
		<Route exact path="/account" component={ Account } />
		<Route exact path="/register" component={ Register } />
		<Route exact path="/login" component={ Login } />
	</div>
	)}
}

export default Routes;
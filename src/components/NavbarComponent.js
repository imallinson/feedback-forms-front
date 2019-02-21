import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../App.css';
import Homepage from './HomepageComponent';
import Cohorts from './CohortsComponent';
import Trainees from './TraineesComponent';
import Account from './AccountComponent';
import Register from './RegisterComponent';
import Login from './LoginComponent';

import Auth from '../Auth';

class NavComponent extends Component {


  render() {

  	function authCheck() {
  		if(Auth.isAuthenticated()) 
  		{
  			return <ul id="nav-ul">
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/cohorts">Cohorts</Link></li>
					<li><Link to="/trainees">Trainees</Link></li>
					<li><Link to="/account">Account</Link></li>
					<li onClick={() => {
						Auth.logout(() => {
							console.log(Auth.isAuthenticated());
						});
					}}><Link to="/">Logout</Link></li>
				</ul>;
  		} else if (!Auth.isAuthenticated())
  		 {
  			return 	<ul id="nav-ul">
	  					<li><Link to="/home">Home</Link></li>
						<li><Link to="/account">Account</Link></li>
						<li><Link to="/register">Register</Link></li>
						<li><Link to="/login">Login</Link></li>
					</ul>;
  		}
  	}
  	
    return (
    	<Router>
	    	<div>
	    	{ authCheck() }
				<ul id="nav-ul">
				</ul>
				<Route exact path="/" component={ Homepage } />
				<Route exact path="/home" component={ Homepage } />
				<Route exact path="/cohorts" component={ Cohorts } />
				<Route exact path="/trainees" component={ Trainees } />
				<Route exact path="/account" component={ Account } />
				<Route exact path="/register" component={ Register } />
				<Route exact path="/login" component={ Login } />

			</div>
		</Router>
    );
  }
}

export default NavComponent;
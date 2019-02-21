import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../App.css';
import Auth from '../Auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class NavComponent extends Component {


  render() {
  	
    return (
	    	<div>
	    	<ul id="nav-ul">
					<li><Link to="/home">Home</Link></li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('admin') == "false") ? <Link to="/form">Form</Link> : null }</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('admin') == "true") ? <Link to="/cohorts">Cohorts</Link> : null }</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('admin') == "true") ? <Link to="/trainees">Trainees</Link> : null }</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? <Link to="/account">Account</Link> : null }</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? null: <Link to="/register">Register</Link>}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? <Link to="/home" onClick={() => {Auth.logout(() => {});}}>Logout</Link> : <Link to="/login">Login</Link>}</li>
				</ul>
			</div>
    );
  }
}

export default NavComponent;
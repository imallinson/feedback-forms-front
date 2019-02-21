import React, { Component } from 'react';
import '../App.css';
import auth from '../Auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class HomepageComponent extends Component {

  render() {
    return (
    	<div className="main-body">
				{JSON.parse(auth.isAuthenticated()) ?
					<div className="home-body">
						<div id="dashboard-item-1">
							{JSON.parse(auth.isAuthenticated() && cookies.get('admin') == 'true') ? <a href="/cohorts">COHORTS (9)</a> : <a href="/form">FORM</a>}
						</div>

						<div id="right-dashboard">
							<div id="dashboard-item-2">
								{JSON.parse(auth.isAuthenticated() && cookies.get('admin') == 'true') ? <a href="/trainees">TRAINEES (5)</a> : <a href="/account">ACCOUNT</a>}
							</div>
							<div id="dashboard-item-3">
								{JSON.parse(auth.isAuthenticated() && cookies.get('admin') == 'true') ? <a href="/account">ACCOUNT</a> : <a href="/home" onClick={() => {auth.logout(() => {});}}>LOGOUT</a>}
							</div>
						</div>
					</div>

					:

					<div className="home-body">
						<div id="dashboard-item-1">
							<a href="/register">REGISTER</a>
						</div>

						<div id="right-dashboard">
							<div id="dashboard-item-2-not-logged">
								<a href="/login">LOGIN</a>
							</div>
						</div>
					</div>

				}
		</div>
    );
  }
}

export default HomepageComponent;
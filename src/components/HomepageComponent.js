import React, { Component } from 'react';
import '../App.css';
import auth from '../Auth';
import Cookies from 'universal-cookie';
import axios from 'axios';
import * as constants from "../Consts.js";

const cookies = new Cookies();

class HomepageComponent extends Component {

	constructor() {
		super();

		this.state = {
			trainees: [],
			unassignedList: 0,
			cohorts: 0,
			timeUpdate: ""

		}

		axios({
			method: 'get',
			// url: constants.get + '/accounts/getAccounts'
			url: constants.gateway + 'getAccounts'
		}).then(response => {

			let uList = [];

			this.setState({
				trainees: response.data
			})
			for (let i = 0; i < response.data.length; i++) {
				if (response.data[i].cohortID === null && response.data[i].admin === false) {
					uList.push(response.data[i]);
				}
			}
			this.setState({
				unassignedList: uList.length
			})
		})

		axios({
			method: 'get',
			// url: constants.get + '/cohorts/getCohorts'
			url: constants.gateway + 'getCohorts'
		}).then(response => {
			let date = new Date();
			let currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
			this.setState({
				cohorts: response.data.length
			})
			this.updateWeek(currentDate);
		})
	}

	updateWeek = (currentDate) => {
		if (this.state.timeUpdate !== currentDate) {
			for  ( let i = 1; i <= this.state.cohorts; i++) {
				axios({
					method: 'put',
					url: constants.gateway + 'updateWeekNumber/' + i
				})
			}
			this.setState({
				timeUpdate: currentDate
			})
		}

	}

	render() {

		return (
			<div className="main-body">
				{JSON.parse(auth.isAuthenticated()) ?
					<div className="home-body">
						<div id="dashboard-item-1">
							{JSON.parse(auth.isAuthenticated() && cookies.get('admin') === 'true') ? <a href="/cohorts">COHORTS ({this.state.cohorts})</a> : <a href="/form">FORM</a>}
						</div>

						<div id="right-dashboard">
							<div id="dashboard-item-2">
								{JSON.parse(auth.isAuthenticated() && cookies.get('admin') === 'true') ? <a href="/trainees">TRAINEES ({this.state.unassignedList})</a> : <a href="/account">ACCOUNT</a>}
							</div>
							<div id="dashboard-item-3">
								{JSON.parse(auth.isAuthenticated() && cookies.get('admin') === 'true') ? <a href="/account">ACCOUNT</a> : <a href="/home" onClick={() => { auth.logout(() => { }); }}>LOGOUT</a>}
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
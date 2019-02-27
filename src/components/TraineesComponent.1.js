import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class TraineeComponent extends Component {

	constructor() {
		super();

		this.state = {
			trainees: [],
			cohortList: [],
			cohortNumber: 0
		}

		axios({
			method: 'get',
			url: constants.gateway + 'getCohorts'
		}).then(response => {
			this.setState({
				cohortList: response.data,
				cohortNumber: response.data[0].cohortId
			})
		}).catch(error => {
			console.log(error);
		})

		axios({
			method: 'get',
			url: constants.gateway + 'getAccounts'
		}).then(response => {
			this.setState({
				trainees: response.data
			})
		})
	}

	updateCohortNumber = (e) => {
		if (e.target.value) {
			this.setState({
				cohortNumber: e.target.value,
			});
		}
	}

	assign = (unassigned) => {

		axios({
			method: 'put',
			url: constants.gateway + 'updateAccountBy_id/' + unassigned._id,
			data: {
				accountID: unassigned.accountID,
				firstName: unassigned.firstName,
				lastName: unassigned.lastName,
				email: unassigned.email,
				password: unassigned.password,
				cohortID: this.state.cohortNumber
			}
		})
			.then(response => {
				window.location.reload();
			})
	}

	unAssign = (assigned) => {
		axios({
			method: 'put',
			url: constants.gateway + 'updateAccountBy_id/' + assigned._id,
			data: {
				accountID: assigned.accountID,
				firstName: assigned.firstName,
				lastName: assigned.lastName,
				email: assigned.email,
				password: assigned.password,
				cohortID: null
			}
		})
			.then(response => {
				let trainees = this.state.trainees;
				for (let i = 0; i < trainees.length; i++) {
					if (trainees[i].accountID === response.data.accountID) {
						trainees[i] = response.data;
						break;
					}
				}
				this.setState({ trainees: trainees });
				window.location.reload()
			})
	}

	render() {
		let unassignedList = this.state.trainees.filter(t => t.cohortID === null && t.admin === false).map((unassignedTrainee, i) => (
			<li id="unassigned-trainee" key={i} onClick={() => this.assign(unassignedTrainee)}>{unassignedTrainee.email.substr(0, unassignedTrainee.email.indexOf('@'))}</li>
		));
		
		let filteredList = this.state.trainees.filter(t => t.cohortID && t.cohortID === parseInt(this.state.cohortNumber)).map((filteredTrainee, i) => (
			<li id="filtered-trainee" key={i} onClick={() => this.unAssign(filteredTrainee)}>{filteredTrainee.email.substr(0, filteredTrainee.email.indexOf('@'))}</li>
		));

		let cohorts = this.state.cohortList.map((cohort, i) => (
			<option key={i} value={cohort.cohortID}>{cohort.cohortName}</option>
		));

		return (
			<div className="main-body">
				<h1 id="heading">View and assign trainees</h1>
				<div className="trainees-body">
					<div className="unassigned-trainees">
						<h3>UNASSIGNED ({unassignedList.length})</h3>
						<ul>
							{unassignedList}
						</ul>
					</div>
					<div className="assigned-trainees">
						<h3>ASSIGNED</h3>
						<strong>GROUP: </strong>
						<select name="cohort-number" id="cohort-number" onChange={this.updateCohortNumber}>
							<option>Select a group</option>
							{cohorts}
						</select>
						<ul>
							{filteredList}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default TraineeComponent;

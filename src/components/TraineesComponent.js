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
			unassignedList: [],
			assignedList: [],
			filterList: [],
			cohortNumber: 0
		}

		axios({
			method: 'get',
			// url: constants.get + 'getCohorts'
			url: constants.gateway + 'cohortsGetCohorts'
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
			// url: constants.get + '/accounts/getAccounts'
			url: constants.gateway + 'getAccounts'
		}).then(response => {

			let uList = [];
			let aList = [];

			this.setState({
				trainees: response.data
			})

			for (let i = 0; i < response.data.length; i++) {
				if (response.data[i].cohortID === null && response.data[i].admin === false) {
					uList.push(response.data[i]);
				} else if (response.data[i].cohortID != null && response.data[i].admin === false) {
					aList.push(response.data[i]);
				}
			}

			this.setState({
				unassignedList: uList,
				assignedList: aList
			})
		})
	}

	updateCohortNumber = (event) => {
      this.setState({ cohortNumber: event.target.value });
  }

	assign = (unassigned) => {

		axios({
			method: 'put',
			// url: constants.get + '/accounts/getAccounts'
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
		})
	}

	unAssign = (assigned) => {
		axios({
			method: 'put',
			// url: constants.get + '/accounts/getAccounts'
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
		})
	}
	

  render() {

  	let unassignedList = this.state.unassignedList.map((unassignedTrainee, i) => (
  			<li id="unassigned-trainee" key={i} onClick={() => this.assign(unassignedTrainee)}>{unassignedTrainee.email.substr(0, unassignedTrainee.email.indexOf('@'))}</li>
  	));

  	let assignedList = () => {
  		this.setState({
				filterList:this.state.assignedList.filter(assignedTrainee => assignedTrainee.cohortID === parseInt(this.state.cohortNumber))
  		})
  	}

  	let filteredList = this.state.filterList.map((filteredTrainee, i) => (
  			<li id="filtered-trainee" key={i} onClick={() => this.unAssign(filteredTrainee)}>{filteredTrainee.email.substr(0, filteredTrainee.email.indexOf('@'))}</li>
  	));

  	let cohorts = this.state.cohortList.map((cohort, i) => (
  		<option key={i} value={cohort.cohortId}>{cohort.cohortName}</option>
  	));

    return (
    	<div className="main-body">
			<h1 id="heading">View and assign trainees</h1>
			<div className="trainees-body">
				<div className="unassigned-trainees">
					<h3>UNASSIGNED ({unassignedList.length})</h3>
					<ul>
						{ unassignedList }
					</ul>
				</div>
				<div className="assigned-trainees">
					<h3>ASSIGNED</h3>
					<strong>GROUP: </strong>
					<select name="cohort-number" id="cohort-number" onChange={(event) => {this.updateCohortNumber(event); assignedList();}}>
						<option>Select a group</option>
						{ cohorts }
					</select>
					<ul>
						{ filteredList }
					</ul>
				</div>
			</div>
		</div>
    );
  }
}

export default TraineeComponent;
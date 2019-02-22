import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class TraineeComponent extends Component {

	constructor() {
		super();

		this.state = {
			trainees: [],
			unassignedList: [],
			assignedList: []
		}

		axios({
			method: 'get',
			url: constants.get + '/accounts/getAccounts'
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

  render() {

  	let unassignedList = this.state.unassignedList.map((unassignedTrainee, i) => (
  			<li key={i}>{unassignedTrainee.email}</li>
  	));

  	let assignedList = this.state.assignedList.map((assignedTrainee, i) => (
  			<li key={i}>{assignedTrainee.email}</li>
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
					<select name="cohort-number" id="cohort-number">
						<option value="cohort1">1</option>
						<option value="cohort2">2</option>
						<option value="cohort3">3</option>
					</select>
					<ul>
						{ assignedList }
					</ul>
				</div>
			</div>
		</div>
    );
  }
}

export default TraineeComponent;
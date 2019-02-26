import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class SingleCohortComponent extends Component {

	constructor(props) {
		super();

	  this.state = {
			cohort: "",
			cohortName: "",			
			trainerName: "",
			week: 0,
			description: "",
			traineesList: []
		}

		axios({
			method: 'get',
			// url: constants.get + '/cohorts/getCohortById/' + props.match.params.id
			url: constants.gateway + 'getCohortByCohortID/' + props.match.params.id
		}).then(response => {

			

			this.setState({
				cohort: response.data,
				cohortName: response.data.cohortName,
				trainerName: response.data.trainerName,
				week: response.data.week,
				description: response.data.cohortDescription
			})
		})

		axios({
			method: 'get',
			url: constants.gateway + 'getAccountsByCohortID/' + props.match.params.id
		}).then(response => {

			if (response.data === "null") {
				this.setState({
					traineesList: []
				})
			} else {

				this.setState({
					traineesList: response.data
				})
			}
		})

		axios({
			method: 'put',
			url: constants.gateway + 'updateWeekNumber/' + props.match.params.id
		}).then(response => {

		})
	}

  render() {

  	let trainees = this.state.traineesList.map((trainee, i) => (
			<tr key={i}>
			  <td>{trainee.firstName + " " + trainee.lastName}</td>
				<td>{trainee.email}</td>
				<td><a href={"/singleuser/" + trainee.accountID} className="button">VIEW</a></td>
			</tr>
  	));

    return (
    	<div className="main-body">
			<h1>{this.state.cohortName}</h1>
			<p>Trainer: {this.state.trainerName}</p>
			<p>Description: {this.state.description}</p>
			<h3>Trainees</h3>
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>View</td>
					</tr>
				</thead>
				<tbody>
					{trainees}
				</tbody>
			</table>
		</div>
    );
  }
}

export default SingleCohortComponent;
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
			description: ""
		}

		axios({
			method: 'get',
			url: constants.get + '/cohorts/getCohortById/' + props.match.params.id
		}).then(response => {

			this.setState({
				cohort: response.data,
				cohortName: response.data.cohortName,
				trainerName: response.data.trainerName,
				week: response.data.week,
				description: response.data.cohortDescription
			})
		})
	}

  render() {
    return (
    	<div className="main-body">
			<h1>{this.state.cohortName}</h1>
			<p>Trainer: {this.state.trainerName}</p>
			<p>Week Number: {this.state.week}</p>
			<p>Description: {this.state.description}</p>
			<h3>Trainees</h3>
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>Week</td>
						<td>View</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>!TRAINEE_ONE!</td>
						<td>!TRAINEE_EMAIL_ONE!</td>
						<td>10</td>
						<td><a href="/singleuser" className="button">VIEW</a></td>
					</tr>					
					<tr>
						<td>!TRAINEE_TWO!</td>
						<td>!TRAINEE_EMAIL_TWO!</td>
						<td>10</td>
						<td><a href="/singleuser" className="button">VIEW</a></td>
					</tr>					
					<tr>
						<td>!TRAINEE_THREE!</td>
						<td>!TRAINEE_EMAIL_THREE!</td>
						<td>10</td>
						<td><a href="/singleuser" className="button">VIEW</a></td>
					</tr>					
					<tr>
						<td>!TRAINEE_FOUR!</td>
						<td>!TRAINEE_EMAIL_FOUR!</td>
						<td>10</td>
						<td><a href="/singleuser" className="button">VIEW</a></td>
					</tr>
				</tbody>
			</table>
		</div>
    );
  }
}

export default SingleCohortComponent;
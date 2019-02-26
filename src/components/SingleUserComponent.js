import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

var data = [];

class SingleUserComponent extends Component {


	constructor(props) {
		super(props);

		this.state = {
			trainee: "",
			feedbackList: [],
			feedbackSize: 0,
			myArray: [],
			flagged: ""
		}

		axios({
			method: 'get',
			url: constants.gateway + 'getAccountByAccountID/' + props.match.params.id
		}).then(response => {

			this.setState({
				trainee: response.data,
				flagged: response.data.flagged.toString()
			})

			console.log(response.data);
		})

		axios({
			method: 'get',
			url: constants.gateway + 'getFeedbackFormsByAccountID/' + props.match.params.id
		}).then(response => {

			if (response.data.length < 5) {
			  	this.data = [ {name: 'Week 1', uv: JSON.parse(response.data[0] == null) ? 0 : response.data[0].score },
			  				  {name: 'Week 2', uv: JSON.parse(response.data[1] == null) ? 0 : response.data[1].score },
			  				  {name: 'Week 3', uv: JSON.parse(response.data[2] == null) ? 0 : response.data[2].score },
			  				  {name: 'Week 4', uv: JSON.parse(response.data[3] == null) ? 0 : response.data[3].score },
			  				  {name: 'Week 5', uv: JSON.parse(response.data[4] == null) ? 0 : response.data[4].score },
			  				  {name: 'Week 6', uv: JSON.parse(response.data[5] == null) ? 0 : response.data[5].score }
			  				]
		  	} else {
			  	this.data = [ {name: 'Week 1', uv: JSON.parse(response.data[0] == null) ? 0 : response.data[0].score },
			  				  {name: 'Week 2', uv: JSON.parse(response.data[1] == null) ? 0 : response.data[1].score },
			  				  {name: 'Week 3', uv: JSON.parse(response.data[2] == null) ? 0 : response.data[2].score },
			  				  {name: 'Week 4', uv: JSON.parse(response.data[3] == null) ? 0 : response.data[3].score },
			  				  {name: 'Week 5', uv: JSON.parse(response.data[4] == null) ? 0 : response.data[4].score },
			  				  {name: 'Week 6', uv: JSON.parse(response.data[5] == null) ? 0 : response.data[5].score },
			  				  {name: 'Week 7', uv: JSON.parse(response.data[6] == null) ? 0 : response.data[6].score },
			  				  {name: 'Week 8', uv: JSON.parse(response.data[7] == null) ? 0 : response.data[7].score },
			  				  {name: 'Week 9', uv: JSON.parse(response.data[8] == null) ? 0 : response.data[8].score },
			  				  {name: 'Week 10', uv: JSON.parse(response.data[9] == null) ? 0 : response.data[9].score },
			  				  {name: 'Week 11', uv: JSON.parse(response.data[10] == null) ? 0 : response.data[10].score },
			  				  {name: 'Week 12', uv: JSON.parse(response.data[11] == null) ? 0 : response.data[11].score }
			  				]
		  	}
			this.setState({
				feedbackList: response.data,
				feedbackSize: response.data.length
			})
		})
	}

	flagTrainee = () => {
		axios({
			method: 'put',
			// url: constants.get + '/accounts/getAccounts'
			url: constants.gateway + 'updateAccountBy_id/' + this.state.trainee._id,
			data: {
				accountID: this.state.trainee.accountID,
				admin: this.state.trainee.admin,
				firstName: this.state.trainee.firstName, 
				lastName: this.state.trainee.lastName,
				email: this.state.trainee.email,
				password: this.state.trainee.password,
				cohortID: this.state.trainee.cohortID,
				flagged: !this.state.trainee.flagged
			}
		})
		.then(response => {

		})
	}
	


  render() {

  	let feedbackData = this.state.feedbackList.map((feedback, i) => (
			<tr key={i}>
			  <td>Week: {feedback.week}</td>
				<td>Score: {feedback.score}</td>
				<td><a href={"/viewform/" + feedback.feedbackID} className="button">VIEW</a></td>
			</tr>
  	));

	const renderLineChart = (
	  <LineChart width={900} height={300} data={this.data}>
	    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
	    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
	    <XAxis dataKey="name" />
	    <YAxis />
	    <Tooltip />
	  </LineChart>
	);

    return (
    	<div className="main-body">
    		<div id="single-user-chart">
    			{ renderLineChart }
    		</div>
    		<div className="single-user-body">
				<div id="single-user-info">
					<h1>{this.state.trainee.firstName} {this.state.trainee.lastName}</h1><a id="flag-trainee" onClick={this.flagTrainee} className="button">FLAG</a>
					<p>Cohort Number: {this.state.trainee.cohortID}</p>
					<p>Flagged? {this.state.flagged}</p>
					<p>Feedback given: {this.state.feedbackSize}</p>
				</div>
				<div id="single-user-feedback">
					<h3>Feedback</h3>
					<table>
						<thead>
							<tr>
								<td>Week</td>
								<td>Score</td>
								<td>View feedback</td>
							</tr>
						</thead>
						<tbody>
							{feedbackData}	
						</tbody>
					</table>
				</div>
			</div>
		</div>
    );
  }
}

export default SingleUserComponent;
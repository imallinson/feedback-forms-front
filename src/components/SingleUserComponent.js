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
			myArray: []
		}

		axios({
			method: 'get',
			url: constants.gateway + 'getAccountByAccountID/' + props.match.params.id
		}).then(response => {

			this.setState({
				trainee: response.data
			})
		})

		axios({
			method: 'get',
			url: constants.gateway + 'getFeedbackFormsByAccountID/' + props.match.params.id
		}).then(response => {

		  	this.data = [{name: 'Week 1', uv: JSON.parse(response.data[0] == null) ? 0 : response.data[1].score },
		  				  {name: 'Week 2', uv: JSON.parse(response.data[1] == null) ? 0 : response.data[1].score },
		  				  {name: 'Week 3', uv: JSON.parse(response.data[2] == null) ? 0 : response.data[2].score },
		  				  {name: 'Week 4', uv: JSON.parse(response.data[3] == null) ? 0 : response.data[3].score },
		  				  {name: 'Week 5', uv: JSON.parse(response.data[4] == null) ? 0 : response.data[4].score }

		  				]

			console.log(response.data);
			this.setState({
				feedbackList: response.data,
				feedbackSize: response.data.length
			})
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
	  <LineChart width={600} height={300} data={this.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
	    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
	    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
	    <XAxis dataKey="name" />
	    <YAxis />
	    <Tooltip />
	  </LineChart>
	);

    return (
    	<div className="main-body">
    		{ renderLineChart }
			<h1>Cohort {this.state.trainee.cohortID}</h1>
			<p>Trainee: {this.state.trainee.firstName} {this.state.trainee.lastName}</p>
			<p>Feedback given: {this.state.feedbackSize}</p>
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
    );
  }
}

export default SingleUserComponent;
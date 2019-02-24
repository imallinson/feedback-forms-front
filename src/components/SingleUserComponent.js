import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class SingleUserComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			trainee: "",
			feedbackList: []
		}

		axios({
			method: 'get',
			url: constants.getAccounts + '/getByAccountID/' + props.match.params.id
		}).then(response => {

			this.setState({
				trainee: response.data
			})
		})

		axios({
			method: 'get',
			url: constants.getFeedback + '/getAllFeedbackForms/'
		}).then(response => {

			console.log(response);
			this.setState({
				feedbackList: response.data
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

    return (
    	<div className="main-body">
			<h1>Cohort {this.state.trainee.cohortID}</h1>
			<p>Trainee: {this.state.trainee.firstName} {this.state.trainee.lastName}</p>
			<p>Feedback given: !FEEDBACK_GIVEN!</p>
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
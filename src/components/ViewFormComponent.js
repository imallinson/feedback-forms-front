import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class ViewFormComponent extends Component {

	constructor(props) {
		super(props);

		this.state = ({
			feedbackList: "",
			user: ""
		})

		axios({
			method: 'get',
			url: constants.gateway + 'getFeedbackFormByID/' + props.match.params.id
		}).then(response => {

			this.setState({
				feedbackList: response.data
			})

			axios({
				method: 'get',
				url: constants.gateway + 'getAccountByAccountID/' + response.data.accountID
			}).then(res => {

				console.log(res);

				this.setState({
					user: res.data
				})
			})
		})
	}

  render() {
    return (
    	<div className="main-body">
			<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
			<p>Cohort Number: {this.state.user.cohortID}</p>
			<h3>Feedback Form</h3>
			
			<div>
				<p>Rating {this.state.feedbackList.score}</p>
				<div className="question-list">
					<div className="question">
						<p><strong>QUESTION 1</strong></p>
						<p>{this.state.feedbackList.question1}</p>
					</div>
					<div className="question">
						<p><strong>QUESTION 2</strong></p>
						<p>{this.state.feedbackList.question2}</p>
					</div>
					<div className="question">
						<p><strong>QUESTION 3</strong></p>
						<p>{this.state.feedbackList.question3}</p>
					</div>
					<div className="question">
						<p><strong>QUESTION 4</strong></p>
						<p>{this.state.feedbackList.question4}</p>
					</div>

				</div>
			</div>
		</div>
    );
  }
}

export default ViewFormComponent;

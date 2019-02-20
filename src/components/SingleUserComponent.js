import React, { Component } from 'react';
import '../App.css';

class SingleUserComponent extends Component {


  render() {
    return (
    	<div className="main-body">
			<h1>Cohort !COHORT_NUMBER!</h1>
			<p>Trainee: !TRAINEE_NAME!</p>
			<p>Week Number: !WEEK NUMBER!</p>
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
					<tr>
						<td>!WEEK_NUMBER!</td>
						<td>!FEEDBACK_SCORE!</td>
						<td><a href="/" className="button">VIEW</a></td>
					</tr>				
					<tr>
						<td>!WEEK_NUMBER!</td>
						<td>!FEEDBACK_SCORE!</td>
						<td><a href="/" className="button">VIEW</a></td>
					</tr>
					<tr>
						<td>!WEEK_NUMBER!</td>
						<td>!FEEDBACK_SCORE!</td>
						<td><a href="/" className="button">VIEW</a></td>
					</tr>						
					<tr>
						<td>!WEEK_NUMBER!</td>
						<td>!FEEDBACK_SCORE!</td>
						<td><a href="/" className="button">VIEW</a></td>
					</tr>		
				</tbody>
			</table>
		</div>
    );
  }
}

export default SingleUserComponent;
import React, { Component } from 'react';
import '../App.css';

class SingleCohortComponent extends Component {


  render() {
    return (
    	<div className="main-body">
			<h1>Cohort !COHORT_NUMBER!</h1>
			<p>Trainer: !TRAINER_NAME!</p>
			<p>Week Number: !WEEK NUMBER!</p>
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
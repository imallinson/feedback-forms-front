import React, { Component } from 'react';
import '../App.css';

class TraineeComponent extends Component {


  render() {
    return (
    	<div className="main-body">
			<h1 id="heading">View and assign trainees</h1>
			<div class="trainees-body">
				<div class="unassigned-trainees">
					<h3>UNASSIGNED (12)</h3>
					<ul>
						<li>Trainee 1</li>
						<li>Trainee 2</li>
						<li>Trainee 3</li>						
						<li>Trainee 1</li>
						<li>Trainee 2</li>
						<li>Trainee 3</li>						
						<li>Trainee 1</li>
						<li>Trainee 2</li>
						<li>Trainee 3</li>						
						<li>Trainee 1</li>
						<li>Trainee 2</li>
						<li>Trainee 3</li>
					</ul>
				</div>
				<div class="assigned-trainees">
					<h3>ASSIGNED</h3>
					<strong>GROUP: </strong>
					<select name="cohort-number" id="cohort-number">
						<option value="cohort1">1</option>
						<option value="cohort2">2</option>
						<option value="cohort3">3</option>
					</select>
					<ul>
						<li>Trainee 4</li>
						<li>Trainee 5</li>
						<li>Trainee 6</li>
					</ul>
				</div>
			</div>
		</div>
    );
  }
}

export default TraineeComponent;
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class CohortsComponent extends Component {

	constructor() {
		super();

		this.state = {
			cohortList: []
		}

		axios({
			method: 'get',
			url: 'http://localhost:8080/cohort/getCohorts'
		}).then(response => {

			this.setState({
				cohortList: response.data
			})
		})
	}

  render() {

  	let cohorts = this.state.cohortList.map((cohort, i) => (
			<div className="single-cohort">
			<a href="/singlecohort">
				<p>{cohort.cohortName}</p>
				<p>Trainees: 14</p>
				<p>Week: {cohort.week}</p>
				</a>
			</div>
  	));

    return (
    	<div className="main-body">
			<h1 id="heading">View all cohorts</h1>
			<div id="add-cohort">
				<button><a href="/newcohort">Add Cohort</a></button>
			</div>
		  <div className="cohort-filter">
		    <select name="cohort-selection" id="cohort-selection">
		      <option>Sort By...</option>
		      <option value="1">Group Number ASC</option>
		      <option value="11">Group Number DESC</option>
		      <option value="2">Pupils ASC</option>
		      <option value="22">Pupils DESC</option>
		      <option value="3">Week ASC</option>
		      <option value="33">Week DESC</option>
		    </select>
		  </div>
			<div className="all-cohorts">				
					<div className="single-cohort">
					<a href="/singlecohort">
						<p>Group: 1</p>
						<p>Pupils: 14</p>
						<p>Week: 10</p>
						</a>
					</div>
				<div className="single-cohort">
					<p>Group: 2</p>
					<p>Pupils: 20</p>
					<p>Week: 8</p>
				</div>
				<div className="single-cohort">
					<p>Group: 3</p>
					<p>Pupils: 12</p>
					<p>Week: 6</p>
				</div>
				<div className="single-cohort">
					<p>Group: 4</p>
					<p>Pupils: 9</p>
					<p>Week: 4</p>
				</div>
				<div className="single-cohort">
					<p>Group: 5</p>
					<p>Pupils: 7</p>
					<p>Week: 2</p>
				</div>
				<div className="single-cohort">
					<p>Group: 3</p>
					<p>Pupils: 12</p>
					<p>Week: 6</p>
				</div>
				<div className="single-cohort">
					<p>Group: 4</p>
					<p>Pupils: 9</p>
					<p>Week: 4</p>
				</div>
				<div className="single-cohort">
					<p>Group: 5</p>
					<p>Pupils: 7</p>
					<p>Week: 2</p>
				</div>
			</div>
		</div>
    );
  }
}

export default CohortsComponent;
import React, { Component } from 'react';
import '../App.css';

class CohortsComponent extends Component {


  render() {
    return (
    	<div className="main-body">
			<h1 id="heading">View all cohorts</h1>
			<div id="add-cohort">
				<button>Add Cohort</button>
			</div>
			<div className="all-cohorts">
				<div className="single-cohort">
					<p>Group: 1</p>
					<p>Pupils: 14</p>
					<p>Week: 8</p>
				</div>
				<div className="single-cohort">
					<p>Group: 1</p>
					<p>Pupils: 14</p>
					<p>Week: 8</p>
				</div>
				<div className="single-cohort">
					<p>Group: 1</p>
					<p>Pupils: 14</p>
					<p>Week: 8</p>
				</div>
				<div className="single-cohort">
					<p>Group: 1</p>
					<p>Pupils: 14</p>
					<p>Week: 8</p>
				</div>
				<div className="single-cohort">
					<p>Group: 1</p>
					<p>Pupils: 14</p>
					<p>Week: 8</p>
				</div>

			</div>
		</div>
    );
  }
}

export default CohortsComponent;
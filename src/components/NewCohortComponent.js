import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class NewCohortComponent extends Component {

  constructor() {
    super();

    this.state = {
      cohortName: "",
      cohortTrainer: "",
      cohortWeek: "",
      cohortDescription: ""
    }
  }

  updateCohortName = (event) => {
      this.setState({ cohortName: event.target.value });
  }

  updateCohortTrainer = (event) => {
      this.setState({ cohortTrainer: event.target.value });
  }

  updateWeekNumber = (event) => {
      this.setState({ cohortWeek: event.target.value });
  }

  updateDescription = (event) => {
      this.setState({ cohortDescription: event.target.value });
  }

  createCohort = () => {
    axios({
      method: 'post',
      url: 'http://localhost:8089/cohorts/createCohort',
      data: {
        cohortName: this.state.cohortName,
        trainerName: this.state.cohortTrainer,
        week: this.state.cohortWeek,
        cohortDescription: this.state.cohortDescription
      }
    })
    .then(response => {
      
    })
  }

  render() {
    return (
    	<div className="main-body">
			<div className="container">
			  <h1 id="heading">Create Cohort</h1>
			  <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="cohort-name">Cohort Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="cohort-name" name="cohort-name" placeholder="Example: December Intake" onChange={this.updateCohortName} required/>
            </div>
          </div>
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="email">Cohort Trainer</label>
			      </div>
			      <div className="col-75">
			        <input type="text" id="cohort-trainer" name="cohort-trainer" placeholder="Example: Matt Something" onChange={this.updateCohortTrainer} required/>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="password">Week Number</label>
			      </div>
			      <div className="col-75">
			        <input type="number" id="cohort-week" name="cohort-week" onChange={this.updateWeekNumber} min="0" required />
			      </div>
			    </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="password">Description</label>
            </div>
            <div className="col-75">
              <input type="text" id="cohort-desc" name="cohort-desc" onChange={this.updateDescription} />
            </div>
          </div>
			    <div className="row">
            <button id="register-button" type="button" onClick={this.createCohort}>Create</button>
          </div>
			  </form>
			  </div>
		  </div>
    );
  }
}

export default NewCohortComponent;

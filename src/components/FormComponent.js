import React, { Component } from 'react';
import '../App.css';
import '../js/form';
import axios from 'axios';
import * as constants from "../Consts.js";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class FormComponent extends Component {

	constructor() {
	 	super();

	  	this.state = {
	  		user: "",
	  		question1: "",
	  		question2: "",
	  		question3: "",
	  		question4: "",
	  		error: "",
	  		sliderValue: 6
	  	}
			axios({
	      method:'get',
	      // url: 'http://localhost:8080/accounts/getAccounts',
	      url: constants.getAccounts + '/getAccounts'
	  	})
	  	.then(response => {
	  		for (let i = 0; i < response.data.length; i++) {
	  			console.log(cookies.get('_id'));
	  			if (cookies.get('_id') == response.data[i].accountID) {
			  		this.setState({
			  			user: response.data[i]
			  		})
	  			}
	  		}
	  	})
	}

  createFeedback = () => {
    axios({
      method: 'post',
      url: constants.newForm + '/addFeedbackForm',
      data: {
      	accountID: this.state.user.accountID,
      	cohortID: this.state.user.cohortID,
        score: this.state.sliderValue,
        question1: this.state.question1,
        question2: this.state.question2,
        question3: this.state.question3,
        question4: this.state.question4
      }
    })
    .then(response => {
    	console.log(response);
      })
  }



  updateQuestion1 = (event) => {
      this.setState({ question1: event.target.value });
      console.log("HI");
  }

  updateQuestion2 = (event) => {
      this.setState({ question2: event.target.value });
  }

  updateQuestion3 = (event) => {
      this.setState({ question3: event.target.value });
  }

  updateQuestion4 = (event) => {
      this.setState({ question4: event.target.value });
  }
  updateSlider = (event) => {
      this.setState({ sliderValue: event.target.value });
      console.log(event.target.value);
  }

  showSlider = () => {
  	if (this.state.sliderValue <= 4) {
      	return <input type="range" min="1" max="10" value={this.state.sliderValue} onChange={this.updateSlider} className="slider1" id="myRange"/>
      }
      if (this.state.sliderValue <= 7) {
      	return <input type="range" min="1" max="10" value={this.state.sliderValue} onChange={this.updateSlider} className="slider2" id="myRange"/>
      }
      
      else {
       	return <input type="range" min="1" max="10" value={this.state.sliderValue} onChange={this.updateSlider} className="slider3" id="myRange"/>     	
      }
  }

  render() {
    return (
    	<div className="main-body">
			<div className="container">
			  <h1 id="heading-form">Form</h1>
			  <form id="feedback-form-body">
			    <div className="row">
			      <div className="col-100">
			        <label>Overall thoughts</label>
					<div className="slidecontainer">
					  {this.showSlider()}
					  <p>{this.state.sliderValue}</p>
					</div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <p>Question 1: What went well last week. </p>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <textarea id="question1" name="question1" onChange={this.updateQuestion1} />			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <p>Question 2: How do you plan to show more of this?</p>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <textarea id="question2" name="question2" onChange={this.updateQuestion2} />
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <p>Question 3: What went well last week. </p>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <textarea id="question3" name="question3" onChange={this.updateQuestion3} />			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <p>Question 4: How do you plan to show more of this?</p>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-100">
			        <textarea id="question4" name="question4" onChange={this.updateQuestion4} />
			      </div>
			    </div>
			    <div className="row">
			      <button id="register-button" type="button" onClick={this.createFeedback}>Create</button>
			    </div>
			  </form>
			  </div>
		</div>
    );
  }
}

export default FormComponent;
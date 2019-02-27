import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import * as constants from "../Consts.js";

class RegisterComponent extends Component {

constructor() {
 	super();

  	this.state = {
      firstName: "",
      lastName: "",
  		email: "",
  		password: "",
      admin: null,
  		error: ""
  	}
	}
  updateFirstName = (event) => {
      this.setState({ firstName: event.target.value });
  }

  updateLastName = (event) => {
      this.setState({ lastName: event.target.value });
  }

  updateEmail = (event) => {
      this.setState({ email: event.target.value });
      this.validateEmail();
  }

  updatePassword = (event) => {
      this.setState({ password: event.target.value });
      this.validatePassword();
  }

  validateEmail = () => {
  	if (this.state.email.includes("@qa.com") || this.state.email.includes("@academytrainee.com"))
  	{
  		return <p className="good-response">Email is valid</p>
  	}
  	else
  	{
  		return <p className="bad-response">Email address must be a qa or academytrainee address</p>
  	}
  }

  validatePassword = () => {

  	if (this.state.password === 0) {
  		return <p className="bad-response">Please enter a password</p>
  	}
    if (this.state.password.length < 6 || this.state.password.length > 18) {    	
    	return <p className="bad-response">Password between 6 and 18 characters</p>
    } else  {
    	return <p className="good-response">Password is valid</p>
    }
  }

  adminCheck = () => {
    if (this.state.email.endsWith("qa.com")) {
      return this.setUser(true);
      
    }
    else if (this.state.email.endsWith("academytrainee.com")) {
       return this.setUser(false);
    } else {
      this.setState({
        error: "Email must be a qa or academytrainee address."
      })
    }
  }

  setUser = (admin) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(this.state.password, salt);

    axios({
        method: "post",
        // url: constants.newAccount + '/accounts/createAccount',
        url: constants.gateway + 'createAccount',
        data: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: hash,
            admin: admin
        }
    }).then(resp => {

      if(resp.data === "") {
        this.setState({
          error: "Email already registered."
        })
      } 
      else if (typeof resp.data == "string") {
        this.setState({
          error: resp.data
        });
      }
      else
      {
        this.setState({
          error: "Account created successfully."
        });
          setTimeout(function(){
            window.history.back();
          }, 2000);
      }
    }).catch(error => {
      
      this.setState({
        error: "Error occured. Please try again with different credentials."
      })
    })
  } 

  render() {
    return (
    	<div className="main-body">
			<div className="container">
			  <h1 id="heading">Register Account</h1>
			  <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="firstName" name="firstName" onChange={this.updateFirstName} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lastName" name="lastName" onChange={this.updateLastName} required/>
            </div>
          </div>
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="email">Email Address</label>
			      </div>
			      <div className="col-75">
			        <input type="email" id="email" name="email" placeholder="Example: John.Doe@academytrainee.com" onChange={this.updateEmail} required/>
			        {this.validateEmail()}
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="password">Password</label>
			      </div>
			      <div className="col-75">
			        <input type="password" id="password" name="password" onChange={this.updatePassword} required />
			        {this.validatePassword()}
			      </div>
			    </div>
			    <div className="row">

            <button id="register-button" type="button" onClick={this.adminCheck}>Register</button>
            <span id="error-message">{this.state.error}</span>
          </div>
			  </form>
			  </div>
		</div>
    );
  }
}

export default RegisterComponent;

import React, { Component } from 'react';
import '../App.css';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import auth from '../Auth';
import * as constants from "../Consts.js";

class LoginComponent extends Component {

  constructor() {
 	super();

  	this.state = {
  		users: [],
  		userName: "",
  		email: "",
  		password: "",
  		error: ""
  	}
  }

  updateUsername = (event) => {
      this.setState({ userName: event.target.value });
  }

  updateEmail = (event) => {
      this.setState({ email: event.target.value });
  }

  updatePassword = (event) => {
      this.setState({ password: event.target.value });
  }

  setUser = () => {
		axios({
      method:'get',
      url: constants.gateway + 'getAccounts'
  	})
    .then(response => {
    	
    	let message;

      this.setState({
        users: response.data
      });
      let email = this.state.email;
			let password = this.state.password;

			for (let user of this.state.users) {
	    	if (email === user.email && bcrypt.compareSync(password, user.password)) {

	    		auth.login(user);

	    		message = "Logged in successfully."; 
					break;
	    	}	else {
	    		message = "Username or password invalid";
	    	}
	    }
			this.setState({
    			error: message
    		})    
  	})
	} 

  render() {
    return (
    	<div className="main-body">
			<div className="container">
			  <h1 id="heading">Login</h1>
			  <form>
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="email">Email Address</label>
			      </div>
			      <div className="col-75">
			        <input type="email" id="email" name="email" placeholder="Example: John.Doe@academytrainee.com" value={this.state.email} onChange={this.updateEmail} required/>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="password">Password</label>
			      </div>
			      <div className="col-75">
			        <input type="password" id="password" name="password" value={this.state.password} onChange={this.updatePassword} required />
			      </div>
			    </div>
			    <div id="login-and-error" className="row">
			    
				  <button id="login-button" type="button" onClick={this.setUser}>Login</button>
				  <span id="error-message">{this.state.error}</span>
			    </div>
			  </form>
			  </div>
		</div>
    );
  }
}

export default LoginComponent;

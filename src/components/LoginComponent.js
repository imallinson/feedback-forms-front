import React, { Component } from 'react';
import '../App.css';

class LoginComponent extends Component {

constructor() {
 	super();

  	this.state = {
  		email: "",
  		password: "",
  		error: ""
  	}
	}

  updateEmail = (event) => {
      this.setState({ email: event.target.value });
  }

  updatePassword = (event) => {
      this.setState({ password: event.target.value });
  }

  render() {
    return (
    	<div className="main-body">
			<div className="container">
			  <h1 id="heading">Login</h1>
			  <form action="action_page.php">
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
			    <div className="row">
			      <input type="submit" value="Submit"/>
			    </div>
			  </form>
			  </div>
		</div>
    );
  }
}

export default LoginComponent;
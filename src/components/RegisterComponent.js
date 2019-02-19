import React, { Component } from 'react';
import '../App.css';

class RegisterComponent extends Component {

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
    	console.log(this.state.password.length );    	
    	return <p className="bad-response">Password between 6 and 18 characters</p>
    } else  {
    	return <p className="good-response">Password is valid</p>
    }
  }
  render() {
    return (
    	<div className="main-body">
			<div className="container">
			  <h1 id="heading">Register Account</h1>
			  <form action="action_page.php">
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="email">Email Address</label>
			      </div>
			      <div className="col-75">
			        <input type="email" id="email" name="email" placeholder="Example: John.Doe@academytrainee.com" value={this.state.email} onChange={this.updateEmail} required/>
			        {this.validateEmail()}
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-25">
			        <label htmlFor="password">Password</label>
			      </div>
			      <div className="col-75">
			        <input type="password" id="password" name="password" value={this.state.password} onChange={this.updatePassword} required />
			        {this.validatePassword()}
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

export default RegisterComponent;
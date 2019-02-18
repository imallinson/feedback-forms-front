import React, { Component } from 'react';
import '../App.css';
class HomepageComponent extends Component {

  render() {
    return (
    	<div className="main-body">
			<h1 id="heading">Hello, Matt.</h1>
			<div className="home-body">
				<div id="dashboard-item-1">
					<a href="/cohorts">COHORTS (9)</a>
				</div>
				<div>
					<div id="dashboard-item-2">
						<a href="/trainees">TRAINEES (5)</a>
					</div>
					<div id="dashboard-item-3">
						<a href="/account">ACCOUNT</a>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default HomepageComponent;
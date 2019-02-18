import React, { Component } from 'react';
import '../App.css';

class HomepageComponent extends Component {


  render() {
    return (
    	<div class="main-body">
			<h1 id="homepage-welcome">Hello, Matt.</h1>
			<div class="home-body">
				<div id="dashboard-item-1">
				COHORTS (9)
				</div>
				<div>
					<div id="dashboard-item-2">
						TRAINEES (5)
					</div>
					<div id="dashboard-item-3">
						ACCOUNT
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default HomepageComponent;
import React, { Component } from 'react';
import './App.css';
import {	  
    BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/NavbarComponent';

class App extends Component {
  render() {
    return (
      <Router>
	      <div className="App">
	        <header className="App-header">
	          <Navbar />
	        </header>
	        <div id="main-content">
				<Routes />
			</div>
	      </div>
      </Router>
    );
  }
}

export default App;

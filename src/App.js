import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavbarComponent';
import dragula from 'dragula';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    );
  }
}

export default App;

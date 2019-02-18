import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavbarComponent';

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

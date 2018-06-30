import React, { Component } from 'react';
import './App.css';
import PizzaContainer from './components/PizzaContainer'

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>Welcome to NewAgePizza.com</h1>
          <PizzaContainer />
        </main>
      </div>
    );
  }
}

export default App;

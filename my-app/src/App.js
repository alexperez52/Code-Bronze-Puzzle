import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    guess: 0
  }

  componentDidMount() {
    const guess = this.takeGuess();
    this.setState({ guess: guess });
  }

  takeGuess() {

    const num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    return num;
  }


  render() {

    return (
      <div>
        {this.state.guess}
      </div>
    );
  }
}

export default App;

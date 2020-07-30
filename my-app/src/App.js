import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    turn: 0,
    possibilities: ['a', 'b', 'c', 'd', 'e', 'f'],
    current: ['a', 'b', 'c'],
    correctNum: 0,
    correctPos: 0
  }

  componentDidMount() {

  }
  componentDidUpdate() {
    console.log(this.state.turn);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  play() {
    /*
    Make random guess
    Get feedback e.g (2 0)
    Filter possible results
    Choose the one that yields best results
  */
    var cn = this.state.correctNum;
    var cp = this.state.correctPos;

    this.makeGuess(cn, cp);



    var upCount = this.state.turn + 1;
    this.setState({ turn: upCount });

  }

  makeGuess(cn, cp) {
    var temp = ['a', this.state.possibilities[cn], this.state.possibilities[cp]]
    console.log(temp);
    this.setState({ current: temp });
  }



  render() {

    return (
      <div>

        {this.state.current}
        <input placeholder="correct"
          name="correctNum"
          id="correctNum"
          onChange={this.onChange}></input>
        <input placeholder="correct location"
          name="correctPos"
          id="correctPos"
          onChange={this.onChange}></input>
        <button onClick={() => this.play()}> submit </button>
      </div>
    );
  }
}

export default App;

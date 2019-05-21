import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      text: value
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="type text here" onChange={e => this.handleChange(e.target.value)}/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;

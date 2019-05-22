import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ["for", "why", 'if', 'when', 'what']
    };
  }

  render() {
    let list = this.state.array.map( (item, index) => {
      return <h2 key={index}>{item}</h2>
      
    })
    return <div className="App">
    
    {list}
    
    </div>
    
  }
}

export default App;

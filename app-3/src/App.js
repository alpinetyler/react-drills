import React, { Component } from "react";
import "./App.css"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "",
      list: ["Cessna", "Piper", "Cubcrafters", "Grumman", 
              "Boeing", "Airbus", "McDonnel-Douglas", "Piaggio",
            "Cirrus"]
    }
  }

    handleChange = filter => {
      this.setState({ string: filter});
    }


  
  render(){
    let listOfCompanies = this.state.list
    .filter((element, index) => {
      return element.includes(this.state.string);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}
        type="text" />
        {listOfCompanies}
      </div>
    )
  }
}
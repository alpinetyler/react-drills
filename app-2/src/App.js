import React, {Component} from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      airplanes: ["737", "727", "C-172", "AA5B", "767", "A-320", "747"]
    };
  }
  render(){
    let airplaneList = this.state.airplanes.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return(
      <div className="App">
        {airplaneList}
      </div>
    )
  }
}
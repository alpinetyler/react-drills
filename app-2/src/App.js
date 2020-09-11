import React, {Component} from "react";
import "./App.css";

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      theList:["this", "is", "the", "list", "I", "was", "supposed", "to", "create"]
    };
  }

  render() {
    let displayList = this.state.theList.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    
    return <div className="App">{displayList}</div>
  }
}
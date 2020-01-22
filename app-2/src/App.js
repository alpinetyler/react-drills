import React, {Component} from "react";
import "./App.css"

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      items: ["This", "is", "the", "array", "of", "strings", "spoken", "of"]
    }
  }
  render(){
      let listOfItems = this.state.items.map((element, index)=>{
        return <h3 key={index}>{element}</h3>;
      })
      return <div className="App"> {listOfItems} </div>;
  }
}
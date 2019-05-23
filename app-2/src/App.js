import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
        list: ['this', 'is', 'the', 'array', 'to', 'display']
    }
  }

  render(){
     let list = this.state.list.map((element, index)=> {
        return <h2 key={index}>{element}</h2>
      })
    

       return <div className="App">{list}</div>
    
  }
}

export default App;

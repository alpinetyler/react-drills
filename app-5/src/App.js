import React, { Component } from "react";
import "./App.css";
import Image from './Image'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Image whatever='https://i.ytimg.com/vi/pOmu0LtcI6Y/hqdefault.jpg' /> 
      </div>
    );
  }
}

export default App;

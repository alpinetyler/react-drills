import React, { Component } from "react";
import "./App.css"

import { Link } from "react-router-dom"
import router from "./router"

export default class App extends Component{

  render(){
    return(
      <div className="App">
        <nav>
          <ul> 
            <Link to="/" className="foo"> Home </Link>
            <Link to="/signup" className="foo"> Signup< /Link>
            <Link to="/details" className="foo"> Details </Link>
          </ul>
        </nav>
        <br />

        {router}
      </div>
    )
  }
}
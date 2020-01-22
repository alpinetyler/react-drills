import React, {Component} from "react";
import './App.css';

import Image from './Image';

export default class App extends Component{

  render(){
    return(
      <div className="App">
        <Image myImage="https://www.wallpaperup.com/uploads/wallpapers/2014/12/27/567873/b3543e2dbf32e4e2718c0799e50367a5-700.jpg" />
      </div>
    )
    
  }
}

import React, { Component } from "react";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image theImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nm9SjETK7VEz8t0jDwVYwc5-TMr9auSA8y9XzrhiLfaXT66zxA'/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

import { Link } from "react-router-dom"
import router from "./router";

class App extends Component {
  render() {
    return (
      <div className="App">
       <nav>
         <ul>
           <Link className="foo" to="/">Home  </Link>
           <Link className="foo" to="/signup">Signup  </Link>
           <Link className="foo" to="/details">Details  </Link>
         </ul>
       </nav>
       <br />

       {router}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      filterString: '',
      listOfItems: ['red', 'apple', 'blue', 'sky', 'yellow', 'sun', 'green', 'grass', 'orange', 'sunset', 'sunspots', 'sunscreen','sundog']

    };
  }

    handleChange(filter){
      this.setState({filterString: filter})
    }

 
  render() {
    let itemsToDisplay = this.state.listOfItems
    .filter((element,index) =>{

      //changed includes to startsWith -- seems to work better for filtering
      return element.startsWith(this.state.filterString)
    })
    .map((element,index) =>{
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {itemsToDisplay}

      </div>
    );
  }
}

export default App;

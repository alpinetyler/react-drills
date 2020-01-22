import React, {Component} from "react";
import './App.css';

export default class App extends Component{

  constructor(){
    super()

    this.state = {
      items: ["foo", "fool", "free", "falala", "moo", "move", "moot", "my", "meow", "foot"],
      filterString: ''
    }
  }

  handleChange = filter => this.setState({ filterString: filter});

  render(){
    let filteredList = this.state.items
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h3 key={index}>{element}</h3>;
    })
    return(
      <div className="App">
        <input
          type="text"
          placeholder="Enter word to filter"
          onChange={e => this.handleChange(e.target.value)}/>
        {filteredList}
      </div>
    )
  }
}
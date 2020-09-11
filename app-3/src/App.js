import React, {Component} from "react";
import "./App.css";

export default class App extends Component{
  constructor() {
    super();

    this.state = {
      itemList: ["me", "may", "ma", "mo", "moo"],
      filterString: ""
    };
  }

  handleChange = filter => {
    this.setState({filterString: filter})
  }

  render() {
    let itemsToDisplay = this.state.itemList
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {itemsToDisplay}
      </div>
    );
  }
}
import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ["food", "drink", "merriment", "party", "dancing", "orchestra", "play"],
      filterString: ''
    }
  }



  handleChange = (filter) => {
    this.setState({
      filterString: filter
    })
  }




  render() {
    let listOfItems = this.state.list.filter((item, index) => {
      return item.startsWith(this.state.filterString)
    }).map((item, index) => {
      return <h1 key={index}>{item}</h1>
    })
    return (
      <div className="App">

        <input
          type="text"
          name="filter"
          onChange={e => this.handleChange(e.target.value)} />
        <div>
          {listOfItems}
        </div>

      </div>
    )
  }
}
import React, {Component} from 'react'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange(text){
    this.setState({
      text: text
    })
  }

  render(){
    return(
      <div className="App">
        <h3>Enter Text Here:</h3>
        <input
        type="text"
        name="text"
        onChange={ e => this.handleChange(e.target.value)} />

        <div style={styles.test}>{this.state.text}</div>
      </div>
    )
  }
}

let styles = {
  test: {
    fontSize: '300px',
    fontFamily: "Apple-Chancery"
    
  }
}
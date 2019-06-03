import React, {Component} from 'react'

export default class App extends Component {
  constructor(props){
    super()

    this.state = {
       myTypedWords: ''
    }
  }

  doTheChanges = (theText) => {
    this.setState({
      myTypedWords: theText
    })
  }


  render(){
    return(
      <section className="App">
        <input type="text" onChange={(e) => this.doTheChanges(e.target.value)}/>
        <h1>{this.state.myTypedWords}</h1>

      </section>
    )
  }
}
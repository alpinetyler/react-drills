import React, {Component} from 'react'
import './App.css'


export default class App extends Component {
  constructor(props){
    super()

    this.state = {
      theList: ["me", "you", "us", "for", "to", "forever", "hello", "what"]
    }
  }




  render(){
    let forever = this.state.theList.map((element, index) => {
      return <h2 id={index}>{element}</h2>
    })


    return(
      <section className="App">
        {forever}
      </section>
    )
  }
}
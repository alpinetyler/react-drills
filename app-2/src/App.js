import React, {Component} from 'react'
import ('./App.css')

export default class App extends Component{
  constructor(props){
    super()

    this.state = {
       myList: ["why", "oh", "why", "is", "this", "more", "difficult", "than", "it", "looks", "?"]
    }
  }

  render(){
    let displayList = this.state.myList.map((element, index) => {

      return <h3 id={index}>{element}</h3>
    })


    return(
      <section className="App">
        {displayList}
      </section>
    )
  }
}
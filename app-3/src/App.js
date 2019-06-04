import React, {Component} from 'react'
import './App.css'

export default class App extends Component{
  constructor(){
    super()

    this.state = {
        itemList: ["fork", "knife", "spoon", "spa", "club", "clover", "clue", "chum", "knight", "fir", "firm"],
        filterString: ''
    }
  }

  getString(value){
    this.setState({
      filterString: value
    })

  }


  render(){
    let afterFilter = this.state.itemList
    .filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 className="App" id={index}>{element}</h2>
    })
    return(
      <section>
          <input className="App" onChange={e => this.getString(e.target.value)}/>
        
       {afterFilter}
      </section>
    )
  }
}
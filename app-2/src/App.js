import React, {Component} from 'react'
import './App.css'

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      list: ['hello', 'this', 'is', 'the', 'list']
    }
  }


  render(){
    return(
      <div className="App">
    
        {this.state.list.map((item) => {
          return <h1 style={styles.test}>{item}</h1>
        })}
      
        
      </div>
    )
  }
}

let styles = {
  test: {
    fontFamily: 'Apple-Chancery'
  }
}
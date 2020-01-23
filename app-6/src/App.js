import React, {Component} from "react";
import "./App.css";
import Todo from "./components/Todo";

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: "",
      list: []
    }
  }

  handleChange = value => {
    this.setState({
      input: value
    })
  }
  
  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render(){
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })
     return(
       <div className="App">
         <h1>My To-Do List</h1>
         <div>
         <input
            type="text"
            value={this.state.input}
            placeholder="Enter New Task"
            onChange={e => this.handleChange(e.target.value)}
         />
         <button onClick={this.handleClick}>Add Task</button>
         </div>
         {list}
       </div>
     )
  }
}
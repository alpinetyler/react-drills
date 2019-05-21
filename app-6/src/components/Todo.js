import React, {Component} from 'react'
import TodoList from './TodoList'

export default class Todo extends Component{
    constructor(){
        super()
        
        this.state = {
            task: '',
            taskList:[]
        }
    }

    handleTaskChange(value) {
        this.setState({ task: value });
      }
    

    handleAddTask = () =>{
        this.setState({
            taskList: [...this.state.taskList, this.state.task],
            task:''
        })
    }
    render(){

        let list = this.state.taskList.map((element, index)=> {
            return <TodoList key={index} task={element}/>
        })
        return(
            <div>
              <h1>My to-do list:</h1>
              <div>
              <input 
              value={this.state.task}
              placeholder = 'Enter New Task'
              type="text"
              onChange={e => this.handleTaskChange(e.target.value)}/>  
              <button onClick={this.handleAddTask}>Add</button>
              </div>
              {list}
            </div>
        )
    }

}
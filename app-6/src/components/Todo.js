import React, {Component} from 'react'
import TodoList from './TodoList'

export default class Todo extends Component{
    constructor(props){
        super()

        this.state = {
            task: '',
            todolist:[]
        }
    }
    
    enteredTask(newTask){
        this.setState({
            task: newTask
        })
    }

    handleClick = () => {
        this.setState({
            todolist: [...this.state.todolist, this.state.task],
            task: ''
        })

    }

    render(){
        let list = this.state.todolist.map((element, index) => {
            return <TodoList key={index} task={element}/>
        })
        return(
        <div className="App">
            <h1>My to-do list:</h1>
        
        <div>
            <input placeholder="enter task" 
            value={this.state.task}
            onChange={e => this.enteredTask(e.target.value)}/>
            <button onClick={this.handleClick}>Add Task</button>
            
        </div>
        <br />
        {list}
        </div>
        )
    }
}
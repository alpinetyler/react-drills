import React, {Component} from 'react'

export default class TodoList extends Component{

    render(props){
        return(
        <p>{this.props.task}</p>
        )}
}
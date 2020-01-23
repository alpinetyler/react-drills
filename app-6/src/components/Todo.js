import React, {Component} from "react";

export default class Todo extends Component{

    render(){
        return <div className="fool">{this.props.task}</div>
    }
}
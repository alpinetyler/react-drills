import React, {Component} from "react";

export default class Todo extends Component{

    render(){
        return <div className="foo">{this.props.task}</div>
    }
}
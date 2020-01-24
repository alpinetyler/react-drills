import React, {Component} from "react";

export default class Todo extends Component{

  render(){
    return(
      <h1 className="foo">{this.props.task}</h1>
    )
  }
}
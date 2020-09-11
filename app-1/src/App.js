import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            message: ""
        };
    }

    handleChange(value) {
        this.setState({ message: value });
    }

    render() {
        return(
            <div className="App">
                <input 
                type="text"
                onChange={e=> this.handleChange(e.target.value)}
                />
                <p>{this.state.message}</p>
            </div>
        )
    }
}
import React, {Component} from "react";
import "./App.css";

export default class App extends Component{
    constructor(){
        super();

        this.state = {
            message: ""
        };
    }

    handleChange = value => {
        this.setState({message: value})
    }

    render(){
        return(
            <section className="App" >
                <input 
                type="text"
                placeholder="Enter Text Here" 
                onChange={e => this.handleChange(e.target.value)}/>
                <h1>{this.state.message}</h1>
            </section>

        )
    }
}
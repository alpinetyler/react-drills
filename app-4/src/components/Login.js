import React, {Component} from "react";

export default class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }

    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleLogin = () => {
        alert(`Your username is '${this.state.username}' and your password is '${this.state.password}'`)
        this.setState({
            username: '',
            password: ''
          })
    }



    render(){
        return(
            <div>
            <input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="Enter a Username" 
            value={this.state.username}/>
            <p>
            <input
            type="text"
            name="password"
            onChange={this.handleChange}
            placeholder="Enter a Password"
            value={this.state.password} /> 
            </p>
            <button onClick={this.handleLogin}>Login</button>
        </div>
        )
    }
        
        
}
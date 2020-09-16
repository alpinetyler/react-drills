import React, {Component} from "react"

export default class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleLogin = () => {
        alert(`your username is '${this.state.username}' and your password is '${this.state.password}'`)
        //reset state to blank
        this.setState({
            username: "",
            password:""
        })
    }
    render(){
        return(
            <div>
                <input 
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    type="text"
                />
                <input 
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="text"
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}
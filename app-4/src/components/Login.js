import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    userName = (username) =>{
        this.setState({
            username: username
        })
    }

    passWord = (password) =>{
        this.setState({
            password: password
        })
    }

    handleClick = () => {
        alert(`UserName: ${this.state.username} Password: ${this.state.password}`)
    }
    

    render() {
        return (
            <div>
                <input onChange={e => this.userName(e.target.value)} placeholder="Enter Username" />
                <input onChange={e => this.passWord(e.target.value)}  placeholder="Enter Password"/>
                <button onClick={this.handleClick}>Login</button>

            </div>
        )
    }
}
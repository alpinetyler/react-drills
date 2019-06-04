import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super()

        this.state = {
            username: '',
            password: ''

        }
    }

    changeUserName(name) {
        this.setState({
            username: name
        })
    }

    changePassword(password) {
        this.setState({
            password: password
        })
    }

    logIn = () => {
        {alert(`Username: ${this.state.username} Password: ${this.state.password}`)}
    }
    render() {
        return (
            <div>
                <input
                    onChange={e => this.changeUserName(e.target.value)}
                    type="text"
                />
                <input
                    onChange={e => this.changePassword(e.target.value)}
                />
                <button onClick={this.logIn}>Login</button>
            </div>
        )
    }
}
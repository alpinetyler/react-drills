import React, {Component} from 'react'

export default class Login extends Component {

    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }



    handleUserNameChange(val){
        this.setState({
            username: val
        })
    }


    handlePasswordChange(val){
        this.setState({
            password: val
        })
    }

    handleLogin = () =>{ 
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){

        return(
            <div>
                <input type="text" onChange={ (e) => this.handleUserNameChange(e.target.value)}></input>
                <input type="text" onChange={ (e) => this.handlePasswordChange(e.target.value)}></input>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}
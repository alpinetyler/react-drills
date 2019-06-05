import React, {Component} from 'react'

export default class Login extends Component{
    constructor(props){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    changeUsername(username){
        this.setState({
            username: username
           
        })
    }

    changePassword(password){
        this.setState({
            password: password
            
        })
    }

    handleClick = () => {
        alert(`Username is: ${this.state.username} Password is: ${this.state.password}`)
    }


    render(){
        return(
            <div>
                <input type="text" placeholder="enter Username" onChange={e => this.changeUsername(e.target.value)} />
                <input type="text" placeholder="enter Password" onChange={e => this.changePassword(e.target.value)} />
                <button onClick={this.handleClick}>Login</button>

            </div>
        )
    }
}
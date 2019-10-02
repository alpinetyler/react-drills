import React, {Component} from 'react'

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }



    render(){
        return(
            <div>
                <input 
                    type="text"
                    name="username"
                    placeholder="UserName"
                    value={this.state.username}
                    onChange={this.handleChange}/>
                 <input 
                    type="text"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                    value={this.state.password}/>
                <button onClick={this.handleClick}>Save</button>
                
            </div>
        )
        
    }
}
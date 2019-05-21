import React, {Component} from 'react'

export default class Image extends Component {

    render(){
        return(
            <div>
            <img src={this.props.whatever}/>
            <div><h1>What the ???</h1></div>
            
            </div>
        )
    }
}

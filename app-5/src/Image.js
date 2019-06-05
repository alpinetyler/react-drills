import React, {Component} from 'react'

export default class Image extends Component{

    render(){
        return(
            <div>
                <img src={this.props.theImage} width="500"/>
                <h1>This is the one!!</h1>
            </div>
        )
    }
}
import React, {Component} from "react";

export default class Image extends Component {

    render(){
        return(
            <div>
                <img src={this.props.myImage} alt="catconflict" />
                <h1>Cat Error</h1>
            </div>
        )
    }
}
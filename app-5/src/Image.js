import React, {Component} from "react"

export default class Image extends Component{

    render(){
        return(
            <section>
                <img width="500px" src={this.props.myImage} />
                <h2>This is my cool P-51 Image!</h2>
            </section>
        )
    }
}
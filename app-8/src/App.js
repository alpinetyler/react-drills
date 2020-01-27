import React, {Component} from "react";
import "./App.css"
import axios from "axios";

export default class App extends Component{
  constructor(){
    super()

    this.state = {
      lukeSkywalker: ''
    }
  }
  componentDidMount(){
    axios.get("https://swapi.co/api/people/1").then(response => {
      this.setState({
        lukeSkywalker: response.data
      });
    });
  }

  render(){
    return(
      <div className="App">
       <h3>Name: {this.state.lukeSkywalker.name}</h3>
        <h3>Birth Year: {this.state.lukeSkywalker.birth_year}</h3>
        <h3>Height: {this.state.lukeSkywalker.height}</h3>
        <h3>Mass: {this.state.lukeSkywalker.mass}</h3>
        <h3>Eye Color: {this.state.lukeSkywalker.eye_color}</h3>
        <h3>Hair Color: {this.state.lukeSkywalker.hair_color}</h3>
        <h3>Skin Color: {this.state.lukeSkywalker.skin_color}</h3>
        <h3>Home Planet: {this.state.lukeSkywalker.home_planet}</h3>
      </div>
    )
  }
}
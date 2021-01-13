import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas : [
      {name: "Ryan", age: 33, belt: "Black", id: 1},
      {name: "Viktor", age: 32, belt: "Triple black", id: 2},
      {name: "John", age: 21, belt: "Yellow", id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    });
  }
  render() {
    return (
      <div className="App">
        <h1>This is my first React app !</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja = {this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

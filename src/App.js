import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Virat', age: 30 },
      { name: 'Rahul', age: 29 },
      { name: 'Mahi', age: 37 },
      { name: 'Abhi', age: 25 },

    ]

  }

  switchNameHandler = () => {
    //console.log("this is clicked");
    this.setState({
      persons: [
        { name: 'Rishabh Pant', age: 22 },
        { name: 'Rahul', age: 29 },
        { name: 'Mahi', age: 27 },
        { name: 'Abhi', age: 25 },

      ]

    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hey Yoo, Wassup!!</h1>
        <h3>This is really working</h3>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobbies: Cricket, Football</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;

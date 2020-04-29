import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Alice", age: "30" }
    ],
    otherState: "some other value"
  };

  setNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximilian", age: "28" },
        { name: "Manu", age: "29" },
        { name: "Alice", age: "27" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App!!!</h1>
        <p>This is really working!!</p>
        <button onClick={this.setNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobby is racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

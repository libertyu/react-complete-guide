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

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: "28" },
        { name: "Manu", age: "29" },
        { name: "Tom", age: "27" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: "28" },
        { name: event.target.value, age: "29" },
        { name: "Tom", age: "40" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "10px solid black",
      padding: "8px;",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App!!!</h1>
        <p>This is really working!!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian!!")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "MAX!!")}
          changed={this.nameChangedHandler}
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

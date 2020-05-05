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
    otherState: "some other value",
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "10px solid black",
      padding: "8px;",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App!!!</h1>
        <p>This is really working!!</p>
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

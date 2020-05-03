import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Alice", age: "30" }
    ]
  });

  const [otherState, setOtherState] = useState("some other value")

  console.log(personsState, otherState);

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: "28" },
        { name: "Manu", age: "29" },
        { name: "Tom", age: "27" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App!!!</h1>
        <p>This is really working!!</p>
        {/* bind関数内のthisはswitchNameHandlerかsetStateを指し、hogeをセットしている */}
        <button onClick={() => this.switchNameHandler("Maximilian!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // onClickイベント自体をパラメータとしてセットしている
          click={this.switchNameHandler.bind(this, "MAX!!")}
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

export default app;

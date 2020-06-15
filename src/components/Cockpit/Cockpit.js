import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  let assignClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignClasses.push(classes.red); // assignClasses =  ["red"]
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold); // assignClasses =  ["red", "bold"]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm React App!!!</h1>
      <p className={assignClasses.join(" ")}>This is really working!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
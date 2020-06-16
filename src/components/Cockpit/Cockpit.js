import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log(["[Cockpit.js] useEffect"]);
    // HTTP Request(例えばAPIを叩くなど)
    setTimeout(() => {
      alert("Save data to cloud!");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] Cleanup work in useEffect ");
    };
  }, []);

  useEffect(() => {
    console.log(["[Cockpit.js] 2nd useEffect"]);
    return () => {
      console.log("[Cockpit.js] Cleanup work in 2nd useEffect ");
    };
  });

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

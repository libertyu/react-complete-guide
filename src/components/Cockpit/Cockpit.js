import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth_context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log(["[Cockpit.js] useEffect"]);
    // HTTP Request(例えばAPIを叩くなど)
    // setTimeout(() => {
    //   alert("Save data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
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

  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); // assignClasses =  ["red"]
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold); // assignClasses =  ["red", "bold"]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(" ")}>This is really working!!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);

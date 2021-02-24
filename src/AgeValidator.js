import { useState } from "react";
import "./styles.css";

let color = "";

export default function AgeValidator() {
  let [age, setAge] = useState("");
  let [message, setMessage] = useState("");

  function inputChangeHandler(input) {
    setAge(input);
  }
  function onClickHandler() {
    if (age < 18) {
      setMessage("Your age is below 18");
      color = "red";
    } else {
      setMessage("Your age is Valid");
      color = "green";
    }
  }

  // function AgeChecker() {
  //   return (

  //   );
  // }

  return (
    <div>
      <div>
        <h1>Age Validator</h1>
        <input
          type="number"
          placeholder="Enter Your Age"
          onChange={(e) => inputChangeHandler(e.target.value)}
        />
        <br></br>
        <button
          style={{
            margin: "0.1rem",
            backgroundColor: "#6c63ff",
            color: "white",
            width: "6rem",
            height: "2rem",
            border: "1px solid white"
          }}
          onClick={onClickHandler}
        >
          Check Age
        </button>
        <div style={{ color: color }}>{message}</div>
        <hr></hr>
      </div>
    </div>
  );
}

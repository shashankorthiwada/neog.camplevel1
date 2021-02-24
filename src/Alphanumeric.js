import { useState } from "react";
import "./styles.css";

let color = "";
export default function AlphanumericPassword() {
  let [message, setMessage] = useState("");
  function checkPassword(input) {
    if (input) {
      if (/[0-9]/g.test(input)) {
        setMessage("Valid Password");
        color = "green";
      } else {
        setMessage("Your password should contain atleast one numeric value");
        color = "red";
      }
    }
  }

  return (
    <div>
      <h1>AlphaNumeric Passowrd</h1>
      <input
        type="password"
        placeholder="Enter a password"
        onChange={(e) => checkPassword(e.target.value)}
      />
      <div style={{ color: color }}>{message}</div>
    </div>
  );
}

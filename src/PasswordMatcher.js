import { useState } from "react";
import "./styles.css";

let color = "";

export default function PasswordMatcher() {
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [message, setMessage] = useState("");

  function onPasswordChangeHandler(input) {
    setPassword(input);
  }

  function onConfirmPasswordHandler(input) {
    setConfirmPassword(input);
  }

  function onClickHandler() {
    if (password === confirmPassword) {
      setMessage("Passwords Match");
      color = "green";
    } else {
      setMessage("Passwords don't Match");
      color = "red";
    }
  }

  return (
    <div>
      <h2>Password Matcher</h2>
      <input
        style={{ margin: "0.1rem" }}
        type="password"
        onChange={(e) => onPasswordChangeHandler(e.target.value)}
        placeholder="Enter Password"
      />
      <br></br>
      <input
        style={{ margin: "0.1rem" }}
        type="password"
        onChange={(e) => onConfirmPasswordHandler(e.target.value)}
        placeholder="Confirm Password"
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
        disabled={!password && !confirmPassword}
      >
        Validate
      </button>
      <div style={{ color: color }}>{message}</div>
    </div>
  );
}

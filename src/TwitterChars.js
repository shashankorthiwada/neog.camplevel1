import { useState } from "react";
import "./styles.css";

export default function TwitterCharacter() {
  let [message, setMessage] = useState("");

  function characterCount(input) {
    if (input.length > 20) {
      setMessage("Limit Exceeds");
    }
  }

  return (
    <div>
      <h2>Twitter Character Count</h2>
      <textarea onChange={(e) => characterCount(e.target.value)}></textarea>
      <br />
      <div style={{ color: "red" }}>{message}</div>
    </div>
  );
}

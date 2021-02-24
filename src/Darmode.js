import { useState } from "react";
import "./styles.css";

let color = "red";
export default function DarkMode() {
  let [bgColor, setBgColor] = useState("white");

  function changeBgColor() {
    if (bgColor === "white") {
      setBgColor("black");
    } else {
      setBgColor("white");
    }
  }

  return (
    <div>
      <h1>Dark Mode</h1>
      <div
        style={{
          border: "1px solid black",
          width: "20rem",
          height: "20rem",
          marginLeft: "5rem",
          color: color,
          backgroundColor: bgColor
        }}
      >
        <p>
          Some random text to display in dark Mode Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
        <br />
        <button
          style={{
            border: "1px solid white",
            color: "white",
            backgroundColor: "black"
          }}
          onClick={changeBgColor}
        >
          Click Here for Dark Mode
        </button>
      </div>
    </div>
  );
}

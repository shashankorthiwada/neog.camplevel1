import React from "react";
import "./styles.css";
import { useState } from "react";

export default function CounterApp() {
  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    counter += 1;
    setCounter(counter);
  }

  function decrementCounter() {
    counter -= 1;
    setCounter(counter);
  }

  function Counter() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => incrementCounter()}>+</button>
        <button onClick={() => decrementCounter()}>-</button>
        <div>{counter}</div>
      </div>
    );
  }

  return (
    <div>
      <Counter />
    </div>
  );
}

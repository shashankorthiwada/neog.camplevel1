import { useState } from "react";

export default function Todo() {
  let [currentState, setCurrentState] = useState("");
  let [todoLists, setTodoLists] = useState([]);

  function addTodoHandler() {
    setTodoLists([
      ...todoLists,
      {
        todo: currentState,
        completed: false
      }
    ]);

    setCurrentState("");
  }

  function clickHandler(index) {
    let completedTodo = [...todoLists];
    if (completedTodo[index].completed === false) {
      completedTodo[index].completed = true;
      setTodoLists(completedTodo);
    } else {
      setTodoLists(completedTodo);
    }
  }

  return (
    <div>
      <div>
        <h1>Todo App</h1>
        <form>
          <input
            type="text"
            placeholder="Make a todo..."
            value={currentState}
            onChange={(e) => setCurrentState(e.target.value)}
          ></input>
          <button type="button" onClick={addTodoHandler}>
            Add Todo
          </button>

          <ul style={{ listStyle: "none" }}>
            {todoLists.map((item, index) => {
              return (
                <li
                  style={{
                    textDecoration: item.completed ? "line-through" : "inherit"
                  }}
                  key={index}
                  onClick={() => clickHandler(index)}
                >
                  {item.todo}
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </div>
  );
}

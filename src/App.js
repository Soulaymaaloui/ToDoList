
import { useRef, useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>To DO List</h1>
      <div className="todocontainer">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>

                <span
                  className="delete"
                  onClick={() => handleDeleteItem(index)}
                >
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
        <input
          className="todo-input"
          ref={inputRef}
          placeholder="Enter item .. "
        />
        <button className="todo-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import logoReact from "./assets/react.svg"
import { useState } from "react"
const App = () => {
  // Khởi tạo 1 biến và React quản lý biến đấy , khác với biến khai báo thông thường là nó có hàm để cập nhập giá trị biến
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Watching Youtobe" }
  ])
  const name = "eric1";
  const age = 25;
  const data = {
    address: "haiduong",
    country: "hanoi"
  }
  const addNewTodo = (name) => {

    const newTodoList = {
      id: randomIntFromInterval(1, 100000),
      name: name
    }
    setTodoList([...todoList, newTodoList])
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={logoReact} alt="" className="logo" />
      </div>
    </div>
  )
}

export default App

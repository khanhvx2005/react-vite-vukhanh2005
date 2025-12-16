import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import logoReact from "./assets/react.svg"
import { useState } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
const App = () => {
  // Khởi tạo 1 biến và React quản lý biến đấy , khác với biến khai báo thông thường là nó có hàm để cập nhập giá trị biến
  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {

    const newTodoList = {
      id: randomIntFromInterval(1, 100000),
      name: name
    }
    setTodoList([...todoList, newTodoList])
  }
  function randomIntFromInterval(min, max) { // min and max inc luded 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length > 0 ?
          <TodoData

            todoList={todoList}
          />
          :
          <div className="todo-image">
            <img src={logoReact} alt="" className="logo" />
          </div>

        }

      </div>
      <Footer />
    </>

  )
}

export default App

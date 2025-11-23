import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import logoReact from "./assets/react.svg"
const App = () => {
  const name = "eric1";
  const age = 25;
  const data = {
    address: "haiduong",
    country: "hanoi"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={logoReact} alt="" className="logo" />
      </div>
    </div>
  )
}

export default App

import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import logoReact from "./assets/react.svg"
import { useState } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { Outlet } from "react-router-dom"
const App = () => {
  // Khởi tạo 1 biến và React quản lý biến đấy , khác với biến khai báo thông thường là nó có hàm để cập nhập giá trị biến


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default App

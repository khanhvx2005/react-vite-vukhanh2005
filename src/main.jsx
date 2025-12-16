import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import "./styles/gloabal.css"
import LoginPage from './pages/login.jsx';
import BookPage from './pages/books.jsx';
import UserPage from './pages/user.jsx';
import RegisterPage from './pages/register.jsx';
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/books",
        element: <BookPage />
      },
      {
        path: "/users",
        element: <UserPage />
      }

    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

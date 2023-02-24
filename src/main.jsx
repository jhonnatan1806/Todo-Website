import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UsersProvider } from './utils/UsersContext'
import { TasksProvider } from './utils/TasksContext'

import Home from './pages/home/Home'

import './assets/css/index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsersProvider>
    <TasksProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </TasksProvider>
  </UsersProvider>
)

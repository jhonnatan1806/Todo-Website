import React, { createContext, useState } from 'react'
import { useGetTasks } from '../hooks/useGetTasks'
import { getTasks } from '../services/getTasks'

export const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
  const { tasks, setTasks } = useGetTasks()
  const [filter, setFilter] = useState('All')
  const [filterTasks, setFilterTasks] = useState([])

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, filter, setFilter,filterTasks, setFilterTasks }}
    >
      {children}
    </TasksContext.Provider>
  )
}

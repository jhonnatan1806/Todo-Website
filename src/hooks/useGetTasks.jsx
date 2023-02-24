import React from 'react'
import { useEffect, useState } from 'react'
import { getTasks } from './../services/getTasks'

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getTasks()
      .then((data) => {
        setTasks(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return { tasks, setTasks, loading, error, setError }
}

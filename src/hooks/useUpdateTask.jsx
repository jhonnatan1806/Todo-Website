import React from 'react'
import { useState } from 'react'
import { updateTask } from '../services/updateTask'

export const useUpdateTask = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleUpdate = async (e, task, status) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    task.status = status
    const result = await updateTask(task)
    if (result.error) {
      setError(result.error)
    }
    setLoading(false)
  }

  return { handleUpdate, loading, error }
}

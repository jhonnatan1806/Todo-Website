import React from 'react'
import { useState } from 'react'
import { removeTask } from '../services/removeTask'

export const useRemoveTask = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleRemove = async (e, task) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const result = await removeTask(task)
    if (result.error) {
      setError(result.error)
    }
    setLoading(false)
  }

  return { handleRemove, loading, error }
}

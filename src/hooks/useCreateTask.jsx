import React from 'react'
import { useState } from 'react'
import { createTask } from '../services/createTask'

export const useCreateTask = () => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = async (e, userActive) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const result = await createTask(userActive, content, 0)
    if (result.error) {
      setError(result.error)
    } else {
      setContent('')
    }
    setLoading(false)
    return result
  }

  return { content, handleChange, handleSubmit, loading, error }
}

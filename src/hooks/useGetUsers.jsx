import React from 'react'
import { useEffect, useState } from 'react'
import { getUsers } from './../services/getUsers'

export const useGetUsers = () => {
  const [users, setUsers] = useState([])
  const [userActive, setUserActive] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getUsers()
      .then((data) => {
        setUsers(data)
        setLoading(false)
        setUserActive(data[0])
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return { users, userActive, setUserActive, loading, error }
}

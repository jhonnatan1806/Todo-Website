import React from 'react'
import { createContext, useState } from 'react'
import { useGetUsers } from '../hooks/useGetUsers'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const { users, userActive, setUserActive, loading, error } = useGetUsers()
  
  return (
    <UsersContext.Provider value={{ users, userActive, setUserActive }}>
      {children}
    </UsersContext.Provider>
  )
}
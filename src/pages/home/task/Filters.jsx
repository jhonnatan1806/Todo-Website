import React from 'react'
import { useContext } from 'react'
import { TasksContext } from '../../../utils/TasksContext'

export const Filters = () => {
  const filters = ['All', 'Pending', 'Completed', 'Trash']
  const { filter, setFilter } = useContext(TasksContext)
  
  const handleFilter = (item) => {
    setFilter(item)
  }

  return (
    <>
      <ul className="flex flex-row gap-2">
        {filters.map((item, index) => (
          <li
            key={index}
            onClick={() => handleFilter(item)}
            className={`cursor-pointer select-none px-4 py-2 rounded-md border border-neutral-300 ${
              item === filter ? 'bg-neutral-800 text-white' : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

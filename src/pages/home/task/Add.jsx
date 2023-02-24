import React from 'react'
import { useContext } from 'react'
import { UsersContext } from '../../../utils/UsersContext'
import { TasksContext } from '../../../utils/TasksContext'
import { useCreateTask } from '../../../hooks/useCreateTask'
import { getTasks } from '../../../services/getTasks'

export const Add = () => {
  const { userActive } = useContext(UsersContext)
  const { filter ,setTasks, setFilter, setFilterTasks } = useContext(TasksContext)
  const { content, handleChange, handleSubmit } = useCreateTask(userActive)

  const handleClick = async (e, userActive) => {
    e.preventDefault()
    if (userActive === null || content === '') return
    const response = await handleSubmit(e, userActive)
    const task ={
      _id: response.insertedId,
      user_id: userActive._id,
      content: content,
      status: 0,
    }
    setTasks( previewTasks => [...previewTasks, task])
    if (filter === 'All'){
      setFilterTasks( previewTasks => [...previewTasks, task])
    }else{
      setFilter('All')
    }

    
  }

  return (
    <>
      <form
        onSubmit={(e) => handleClick(e, userActive)}
        method={'POST'}
        className="w-full inline-flex gap-2"
      >
        <input
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="Add a new task"
          className="grow outline-none p-2 rounded-md border border-neutral-200 focus:border-purple-300"
        />
        <button
          type="submit"
          value="Submit"
          className="flex flex-row items-center gap-2 px-6 py-2 rounded-md text-white bg-purple-500"
        >
          <p className="text-lg font-semibold">Add</p>
        </button>
      </form>
    </>
  )
}

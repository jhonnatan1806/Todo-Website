import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UsersContext } from '../../../utils/UsersContext'
import { TasksContext } from '../../../utils/TasksContext'
import { useRemoveTask } from '../../../hooks/useRemoveTask'
import { useUpdateTask } from '../../../hooks/useUpdateTask'
import { FaCheck, FaTrash, FaUndo } from 'react-icons/fa'
import { LimitedText } from '../../../components/LimitedText'

const FilterTasks = () => {
  const { userActive } = useContext(UsersContext)
  const { tasks, setTasks, filter, setFilter, filterTasks, setFilterTasks } =
    useContext(TasksContext)

  useEffect(() => {
    if (userActive === null || tasks === null) return

    if (filter === 'All') {
      setFilterTasks(
        tasks
          .filter((task) => task.status !== 2)
          .filter((task) => task.user_id === userActive._id)
      )
    } else if (filter === 'Pending') {
      setFilterTasks(
        tasks
          .filter((task) => task.status === 0)
          .filter((task) => task.user_id === userActive._id)
      )
    } else if (filter === 'Completed') {
      setFilterTasks(
        tasks
          .filter((task) => task.status === 1)
          .filter((task) => task.user_id === userActive._id)
      )
    } else if (filter === 'Trash') {
      setFilterTasks(
        tasks
          .filter((task) => task.status === 2)
          .filter((task) => task.user_id === userActive._id)
      )
    }
  }, [filter, userActive])
  return { tasks, setTasks, setFilter, filterTasks, setFilterTasks }
}

export const Card = () => {
  const { tasks, setTasks, filterTasks, setFilterTasks } = FilterTasks()
  const { handleRemove } = useRemoveTask()
  const { handleUpdate } = useUpdateTask()
  const colorStatus = ['bg-yellow-500', 'bg-emerald-500', 'bg-rose-500']

  const handleClickRemove = (e, task) => {
    handleRemove(e, task)
    setFilterTasks(filterTasks.filter((item) => item._id !== task._id))
    setTasks(tasks.filter((item) => item._id !== task._id))
  }

  const handleClickUpdate = (e, task, status) => {
    handleUpdate(e, task, status)
    setFilterTasks(
      filterTasks.map((item) => {
        if (item._id === task._id) {
          item.status = status
        }
        return item
      })
    )
  }

  return (
    <>
      <ul className="flex flex-col-reverse justify-center gap-2 max-h-full overflow-auto">
        {filterTasks !== undefined &&
          filterTasks.map((task, index) => (
            <li
              key={index}
              className="flex flex-row items-center gap-2 p-2 rounded-md border bg-neutral-200"
            >
              <div
                className={`h-3 w-3 rounded-full ${colorStatus[task.status]}`}
              ></div>
              <div className="grow">
                <LimitedText limit={65}>{task.content}</LimitedText>
              </div>
              {task.status === 2 && (
                <>
                  <a
                    onClick={(e) => handleClickUpdate(e, task, 0)}
                    className="rounded-md p-2 text-white cursor-pointer bg-neutral-800"
                  >
                    <FaUndo />
                  </a>
                  <a
                    onClick={(e) => handleClickRemove(e, task)}
                    className="rounded-md p-2 cursor-pointer text-white bg-red-500"
                  >
                    <FaTrash />
                  </a>
                </>
              )}
              {task.status === 1 && (
                <>
                  <a className="rounded-md p-2 text-white cursor-pointer bg-neutral-500">
                    <FaCheck />
                  </a>
                  <a
                    onClick={(e) => handleClickUpdate(e, task, 2)}
                    className="rounded-md p-2 cursor-pointer text-white bg-neutral-800"
                  >
                    <FaTrash />
                  </a>
                </>
              )}
              {task.status === 0 && (
                <>
                  <a
                    onClick={(e) => handleClickUpdate(e, task, 1)}
                    className="rounded-md p-2 text-white cursor-pointer bg-neutral-800"
                  >
                    <FaCheck />
                  </a>
                  <a
                    onClick={(e) => handleClickUpdate(e, task, 2)}
                    className="rounded-md p-2 cursor-pointer text-white bg-neutral-800"
                  >
                    <FaTrash />
                  </a>
                </>
              )}
            </li>
          ))}
      </ul>
    </>
  )
}

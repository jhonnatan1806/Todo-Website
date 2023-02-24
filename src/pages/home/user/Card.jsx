import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UsersContext } from '../../../utils/UsersContext'
import { TasksContext } from '../../../utils/TasksContext'
import { LimitedText } from '../../../components/LimitedText'
import { getTasks } from '../../../services/getTasks'

export const Card = () => {
  const { users, userActive, setUserActive } = useContext(UsersContext)
  const { tasks, setTasks, setFilter } = useContext(TasksContext)

  return (
    <>
      <ul className="w-full flex flex-row gap-2 select-none">
        {users &&
          users.map((user) => (
            <li
              key={user._id}
              onClick={() => setUserActive(user)}
              className={`${
                user === userActive
                  ? 'bg-purple-500 text-white'
                  : 'bg-neutral-200'
              } flex flex-row items-center gap-2 p-2 rounded-md cursor-pointer`}
            >
              <img src={user.path} className="w-12 rounded-md" />
              <LimitedText limit={10}>{user.name}</LimitedText>
            </li>
          ))}
      </ul>
    </>
  )
}

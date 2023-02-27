import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center  gap-4">
      <div className="w-full flex flex-row justify-evenly">
        <a
          href="https://github.com/Jhonnatan1806/frontend-todolist"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 px-4 py-2 rounded-md text-white bg-neutral-800"
        >
          <FaGithub size={30} />
          <p> Frontend </p>
        </a>
        <a
          href="https://github.com/Jhonnatan1806/backend-todolist"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 px-4 py-2 rounded-md text-white bg-neutral-800"
        >
          <FaGithub size={30} />
          <p> Backend </p>
        </a>
      </div>
      <p>All rights reserved</p>
    </footer>
  )
}

export default Footer

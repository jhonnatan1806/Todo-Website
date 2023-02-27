import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <header className="w-full inline-flex justify-center items-center gap-2">
        <p className="font-bold text-4xl px-4 py-2 rounded-md text-white bg-purple-500 ">TO-DO</p>
        <p className="font-bold text-4xl text-neutral-800 ">LIST</p>
        <FaCheck className="text-4xl text-neutral-800 " />
      </header>
    </>
  )
}

export default Header

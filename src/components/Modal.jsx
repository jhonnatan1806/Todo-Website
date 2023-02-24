import React from 'react'
import { useState } from 'react'

const Modal = ({ children, text, open, setOpen}) => {
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      {open && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-neutral-900/50 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white m-4 flex flex-col gap-4">
                <h2 className='font-medium text-xl' >{text}</h2>
                <div className='flex flex-row justify-start gap-4'>
                  <button
                    type="button"
                    onClick={handleOpen}
                    className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-purple-500 text-base font-medium text-white hover:bg-purple-600 focus:outline-none sm:text-sm" >
                    Accept
                  </button>
                  <button
                    type="button"
                    onClick={handleOpen}
                    className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-purple-500 text-base font-medium text-white hover:bg-purple-600 focus:outline-none sm:text-sm" >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal

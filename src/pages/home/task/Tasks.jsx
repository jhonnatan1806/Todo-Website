import React from 'react'
import { Filters } from './Filters'
import { Card } from './Card'
import { Add } from './Add'

const Tasks = () => {
  return (
    <>
      <div className="h-[60vh] flex flex-col gap-4 rounded-md p-4 bg-neutral-100">
        <Add />
        <Filters />
        <Card />
      </div>
    </>
  )
}

export default Tasks

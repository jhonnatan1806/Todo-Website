import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Tasks from './task/Tasks'
import Users from './user/Users'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-200 to-violet-400">
      <div className="max-w-3xl h-[100vh] m-auto flex flex-col justify-around items-center gap-4 p-2 md:p-8 bg-white">
        <Header />
        <main className="w-full flex flex-col gap-4 mx-2">
          <Users />
          <Tasks />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home

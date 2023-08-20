import { useState } from 'react'
import Intro from './components/intro/intro'
import Portfolio from './components/portfolio/portfolio'

function App() {

  return (
    <main className='bg-gradient-to-r from-gray-900 to-cyan-950 h-screen w-full snap-y snap-mandatory overflow-auto'>
      <div className='snap-center'>
        <Intro />
      </div>
      <div className='snap-center'>
        <Intro />
      </div>
      <div className='snap-center'>
        <Intro />
      </div>
      <div className='snap-center'>
        <Intro />
      </div>


    </main>

  )
}

export default App

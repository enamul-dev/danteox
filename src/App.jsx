import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen flex items-center justify-center '>
      <span className='text-2xl md:text-5xl font-bold'>Muhammad Enamul Hossain</span>
        <span className="text-rotate text-2xl md:text-5xl duration-4000">
          <span className="justify-items-center">
              <span className="font-bold  px-2">Emon</span>
              <span className="font-bold  px-2">Rumi</span>
              <span className="font-bold  px-2">Dante</span>
          </span>
        </span>
    </div>
    
    </>
  )
}

export default App

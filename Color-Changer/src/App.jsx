import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")
  return (
    <div className='w-100vw h-screen' style={{ backgroundColor: color }}>
      <h2 className='bg-red-300 text-black rounded-lg p-4 m-4 fixed top-0 right-0 left-0 font-medium'>Color-Changer Project</h2>
      <div className='fixed flex flex-wrap inset-x-0 justify-center bottom-12 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: "white" }}>White</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: "grey" }}>Grey</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: "green" }}>Green</button>
        </div>
      </div>
    </div>

  )
}

export default App

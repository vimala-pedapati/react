import { useState } from 'react'
import "./App.css";

function App() {
  const [bgColor,setbgColor] = useState('yellow')

  function changeColor(color) {
    setbgColor(color);
  }

  return (
    <>
      <div className='w-full h-screen duration-100' style={{ backgroundColor: bgColor }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='ouline-none px-10 py-1 rounded-full shadow-lg text-white bg-red-500' onClick={()=> changeColor('red')}>red</button>
            <button className='ouline-none px-10 py-1 rounded-full shadow-lg text-white bg-green-500' onClick={()=> changeColor('green')}>green</button>
            <button className='ouline-none px-10 py-1 rounded-full shadow-lg text-white bg-blue-500' onClick={()=> changeColor('blue')}>blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

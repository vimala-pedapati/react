import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App() {
  const [count, setCount] = useState(0)
  const url1 = "https://media.licdn.com/dms/image/D5603AQGUBS7-Y9p6uQ/profile-displayphoto-shrink_400_400/0/1708129233466?e=1719446400&v=beta&t=jD144OAix_S8Ps1IPaUo4iV0SztqJEuSqPnZE5Be_n4";
  const about = "Skilled Developer with 2+ years of experience developing mobile applications and two years of experience in the Flutter framework. Proven track record of developing and deploying mobile apps";
  return (
    <>
      {/* Text size, Background Color, Padding, Rounded Cornerss */}
      {/* <h1 className='text-5xl'>with text size</h1>
      <h1 className='text-2xl bg-green-300'>with background color</h1>
      <h1 className='p-3 text-2xl bg-green-100'>with padding</h1>
      <h1 className='p-3 text-2xl bg-green-500 rounded-md'>with rounded corners</h1> */}
       <Card url = {url1} des = {about} name = "Vimala Kesireddy" sign = "Flutter Developer, Hyderabad"></Card>
       <Card></Card>
    </>
  )
}

export default App

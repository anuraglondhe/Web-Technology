import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)
  const name = "Anurag"

  return (
    <>
    <h1>{name}</h1>
    <Student/>
      
    </>
  )
}

export default App

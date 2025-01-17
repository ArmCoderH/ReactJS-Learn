import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  // let count = 15

  const addvalue = () => {
    // console.log("clicked")
    setCount(count + 1)
  }
  const removeValue = () => {
    // console.log("clicked")
    setCount(count - 1)
  }
  return (
    <>
     <h1>Arman Hingora</h1>
     <p>count number is = {count}</p>
     <button onClick={addvalue}
      >Add {count}</button>
     <br />

     <button onClick={removeValue}
     >remove {count}</button>
    </>
  )
}

export default App

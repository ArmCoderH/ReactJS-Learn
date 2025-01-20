import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
      <Home/>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anootherELement =(
  <a href='https://google.com' target='_blank'> Click on google</a>
)

//New Element Declair

function myApp(){
  return(
    <div>
      <h1>Arman Hingora</h1>
    </div>
  )
}

// createRoot(document.getElementById('root'))
// .render(
//   anootherELement
// )

createRoot(document.getElementById('root'))
.render(

  myApp()

)

// createRoot(document.getElementById('root')).render(
//     <App />
// )

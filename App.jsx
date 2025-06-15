import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import './App.css'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <p>My name is Kethely and i am learning React js</p>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events />
      </div>
     
    </>
  )
}

export default App

{/*Comentário */}
import { useState } from 'react'
import '../src/styles/App.css'
import AppRouts from './router/AppRouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppRouts/>
    </div>
  )
}

export default App

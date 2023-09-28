import { useState } from 'react'
import './App.css'
//components
import ToDo from './components/ToDo'

function App() { 
  const [work, setWork] = useState()
  
  const mostra = () => {
    
  }

  return (
    <div className="app">      
      <div className='container'>
        <div className="add_tarefa">
          <ToDo mostra={mostra}/>
        </div>
      </div>
    </div>
  )
}

export default App

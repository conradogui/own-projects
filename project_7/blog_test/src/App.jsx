import { useState } from 'react'
import './App.css'
//components
import ToDo from './components/ToDo'

function App() { 
  const [tarefa, setTarefa] = useState('')
  const [data, setData] = useState('')
  const [submittedValue, setSubmittedValue] = useState('')
  
  const mostraTarefa = (e) => {
    setTarefa(e.target.value)
  }

  const mostraData = (e) => {
    setData(e.target.value)
  }

  return (
    <div className="app">      
      <div className='container'>
        <div className="add_tarefa">
            <ToDo mostraTarefa={mostraTarefa} tarefa={tarefa} mostraData={mostraData} data={data} submittedValue={submittedValue} setSubmittedValue={setSubmittedValue} />
        </div>
      </div>
    </div>
  )
}

export default App

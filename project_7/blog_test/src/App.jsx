import { useState } from 'react'
import './App.css'
//components
import ToDo from './components/ToDo'

function App() { 
  const [tarefa, setTarefa] = useState('')
  const [data, setData] = useState('')
  const [historico, setHistorico] = useState([])
  
  const mostraTarefas = (e) => {
    setTarefa(e.target.value)
  }
  const mostraData = (e) => {
    setData(e.target.value)
  }

  return (
    <div className="app">      
      <div className='container'>
        <div className="add_tarefa">
            <ToDo mostraTarefas={mostraTarefas} tarefa={tarefa} historico={historico} setHistorico={setHistorico} data={data} mostraData={mostraData} />
        </div>
      </div>
    </div>
  )
}

export default App

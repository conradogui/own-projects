import { useState } from 'react'
import './App.css'
//components
import ToDo from './components/ToDo'

function App() { 
  const [tarefa, setTarefa] = useState('')
  const [hour1, setHour1] = useState('')
  const [hour2, setHour2] = useState('')
  const [historico, setHistorico] = useState([])
  
  const mostraTarefas = (e) => {
    setTarefa(e.target.value)
  }
  const mostraHora = (e) => {
    setHour1(e.target.value)
  }
  const mostraHora2 = (e) => {
    setHour2(e.target.value)
  }

  

  return (
    <div className="app">      
      <div className='container'>
        <div className="add_tarefa">
            <ToDo mostraTarefas={mostraTarefas} tarefa={tarefa} historico={historico} setHistorico={setHistorico} hour={hour1} mostraHora={mostraHora} hour2={hour2} mostraHora2={mostraHora2} setHour1={setHour1} setHour2={setHour2} setTarefa={setTarefa}/>
        </div>
      </div>
    </div>
  )
}

export default App

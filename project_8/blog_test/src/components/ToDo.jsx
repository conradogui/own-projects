import './ToDo.css' 

const ToDo = ({mostraTarefas, tarefa, historico, setHistorico, hour, mostraHora, hour2, mostraHora2, setHour1, setHour2, setTarefa}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setHistorico([...historico, `${tarefa} de ${hour} até ${hour2}`])
        setHour1('')
        setHour2('')
        setTarefa('')
    }

    const handleDelete = (index) => {
      const newHistorico = [...historico]
      newHistorico.splice(index, 1)
      setHistorico(newHistorico)
    }
    

  return (
    <div>
      <h1>Check Lista</h1>
        <div className='container1'> 
          <form action=""  onSubmit={handleSubmit}>
              <span>Adicionar atividade:</span>
              <input type="text" name="tarefa" id="tarefa" value={tarefa} onChange={mostraTarefas}/>
              <span>Horário de início:</span>
              <input type="time" name="hora" id="hora" value={hour} onChange={mostraHora} />
              <span>Horário de términio:</span>
              <input type="time" name="hora2" id="hora2" value={hour2} onChange={mostraHora2} />
              <button>Adicionar</button>
          </form>
        </div>
        <div className='container2'>
          <h3>Tarefas:</h3>
        <ul className='tarefa'>
          {historico.map((valor, index) => (
            <li key={index}><span>{valor}</span> <button onClick={() => handleDelete(index)}>&#9989;</button></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToDo
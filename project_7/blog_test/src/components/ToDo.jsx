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
      <h1>Rotina diária</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="tarefa" id="tarefa" value={tarefa} onChange={mostraTarefas}/> 
            <input type="time" name="hora" id="hora" value={hour} onChange={mostraHora} />  
            <input type="time" name="hora2" id="hora2" value={hour2} onChange={mostraHora2} />      
            <button>Adicionar</button>
        </form>
        <div>
        <div>
          {historico.map((valor, index) => (
            <p key={index}>{valor} <button onClick={() => handleDelete(index)}>Fiz</button></p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToDo
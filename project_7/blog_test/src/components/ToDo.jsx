const ToDo = ({mostraTarefas, tarefa, historico, setHistorico, data, mostraData}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setHistorico([...historico, tarefa + ' - ' + data])
    }

  return (
    <div>
      <h1>Adicionar tarefa</h1>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" name="tarefa" id="tarefa" value={tarefa} onChange={mostraTarefas}/> 
            <input type="date" name="data" id="data" value={data} onChange={mostraData} />        
            <button>Adicionar</button>
        </form>
        <div>
        <ul>
          {historico.map((valor, index) => (
            <li key={index}>{valor} <button>Apagar</button></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToDo
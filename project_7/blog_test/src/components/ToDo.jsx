const ToDo = ({mostraTarefa, tarefa, mostraData, data, submittedValue, setSubmittedValue}) => {


    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedValue(tarefa, data)
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" name="tarefa" id="tarefa" value={tarefa} onChange={mostraTarefa}/>
            <input type="date" name="data" id="data" value={data} onChange={mostraData} />            
            <button>Adicionar</button>
        </form>
        {submittedValue && (
        <div>
          Valor submetido: {submittedValue}
        </div>
      )}
    </div>
  )
}

export default ToDo
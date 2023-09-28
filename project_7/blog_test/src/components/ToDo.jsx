const ToDo = ({mostra}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        mostra(mostra)      
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" name="tarefa" id="tarefa"/>
            <button>Adicionar</button>
        </form>
    </div>
  )
}

export default ToDo
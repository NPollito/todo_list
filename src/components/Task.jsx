function Task({task, deleteTask, toogleTask, editTask}) {

    return(
        <tr className="">
            <th className="text-center"><input type="checkbox" checked={task.complete} onChange={() => toogleTask(task.id)}/></th>
            <th><p>{task.name}</p></th>
            <th><button 
                className="btn btn-success" 
                title="Editar"
                onClick={() => editTask(task)}
            ><i className="bi bi-pencil-fill"></i></button></th>
            <th><button 
                className="btn btn-danger"
                title="Borrar"
                onClick={() => deleteTask(task.id)}
            ><i className="bi bi-trash-fill"></i></button></th>
        </tr>
    )
}

export default Task;
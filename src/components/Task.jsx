function Task({task, deleteTask, toogleTask, editTask}) {

    return(
        <div>
            <input type="checkbox" checked={task.complete} onChange={() => toogleTask(task.id)}/>
            <p>{task.name}</p>
            <button onClick={() => editTask(task)}>✏</button>
            <button onClick={() => deleteTask(task.id)}>🗑</button>
        </div>
    )
}

export default Task;
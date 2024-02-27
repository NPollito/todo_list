import Task from "./Task";

function Tasks({tasks, deleteTask, toogleTask, editTask}) {

    return(
        <section className="text-center hola">
           <h3 className="fs-3 mb-3 color-sub-title">Tareas</h3>
           <table className="table table-hover m-auto  table-size">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Completado</th>
                    <th scope="col">Nombre de la Tarea</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    tasks.map(task => {
                    return <Task 
                                key={task.id} 
                                task={task} 
                                deleteTask={deleteTask} 
                                toogleTask={toogleTask} 
                                editTask={editTask}
                            />
                    })
                }
            </tbody>
        </table>
        </section>
    )
}

export default Tasks;
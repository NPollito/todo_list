import Task from "./Task";

function Tasks({tasks, deleteTask, toogleTask, editTask}) {

    return(
        <section>
           <h2>Tareas</h2>
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
        </section>
    )
}

export default Tasks;
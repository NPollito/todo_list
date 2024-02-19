import { useState, useEffect } from "react"
import Form from "./components/Form"
import Tasks from "./components/Tasks"

function App() {

  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState('')
  const [nameTask, setNameTask] = useState('')
  const [updatedTask, setUpdatedTask] = useState('')

  // modificar una tarea
  useEffect(()=> {

    if(updatedTask === '') return

    const update = () => {
      const modifyTask = [...tasks]
      let taskName = modifyTask.find(task => task.id === id)
      taskName.name = updatedTask
      setTasks(modifyTask)
    }

    update()

  }, [updatedTask])

  // agregar tareas al array
  const addTasks = task => {
    setTasks([...tasks, task])
  }

  // Marcar como completado una tarea
  const toogleTask = id => {
    const newTasks = [...tasks]
    let taskID = newTasks.find(task => task.id === id)
    taskID.complete = !taskID.complete
    setTasks(newTasks)
  }

  // editar tarea
  const editTask = task => {
    setNameTask(task.name)
    setId(task.id)
    setEditMode(true)
  }

  // Eliminar tarea
  const deleteTask = id => {    
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <main>
      <section>
        <h1>Todo list</h1>
        <Form
          addTasks={addTasks}
          editMode={editMode} 
          setEditMode={setEditMode}
          nameTask={nameTask}
          setNameTask={setNameTask}
          setUpdatedTask={setUpdatedTask}
        />
        <div>
          <Tasks 
            tasks={tasks} 
            deleteTask={deleteTask} 
            toogleTask={toogleTask} 
            editTask={editTask}
          />
        </div> 
      </section>
    </main>
  )
}

export default App

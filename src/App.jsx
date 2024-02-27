import { useState, useEffect } from "react"
import Form from "./components/Form"
import Tasks from "./components/Tasks"

function App() {

  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState('')
  const [nameTask, setNameTask] = useState('')
  const [updatedTask, setUpdatedTask] = useState('')
  const [showTable, setShowTable] = useState(false)

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
    <main className="container">
      <h1 className="py-5 text-center fs-1 fw-bold text-light">Lista de Tareas</h1>
      <div className="row">
        <section className="col-12 px-2 mb-5">
          <Form
            addTasks={addTasks}
            editMode={editMode} 
            setShowTable={setShowTable}
            setEditMode={setEditMode}
            nameTask={nameTask}
            setNameTask={setNameTask}
            setUpdatedTask={setUpdatedTask}
            />
        </section>
        <section className="col-12 px-2">
          {
            showTable &&
              <Tasks 
                tasks={tasks} 
                deleteTask={deleteTask} 
                toogleTask={toogleTask} 
                editTask={editTask}
              />
          }
        </section>
      </div>        
    </main>
  )
}

export default App

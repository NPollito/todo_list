import { useState} from "react";

function Form({addTasks, editMode, setEditMode, nameTask, setNameTask, setUpdatedTask}) {

    const [task, setTask] = useState({
        name: "",
    })

    const [error, setError] = useState(false)

    const {name} = task

    // funcion actualizar las tareas
    const updateTask = e => {
        if (editMode) {
            setNameTask(e.target.value)
            return
        }
        
        setTask({...task, [e.target.name]: e.target.value})
    }

    // funcion agregar tarea
    const validateMessage = e => {
        
        e.preventDefault()
        
        if (name.trim() === "") {
            setError(true)
            return
        }
        
        setError(false)

        // asignar un id a la tarea y un estado
        task.id = Date()
        task.complete = false

        addTasks(task)

        // reiniciar formulario
        setTask({name: ""})
    }

    // funcion modificar una tarea
    const saveTask = e => {

        e.preventDefault()

        if (nameTask.trim() === "") {
            setError(true)
            return
        }
        
        setError(false)
        setUpdatedTask(nameTask)
        setNameTask('')

        setEditMode(false)
    }
    
    return(
        <>
            <h3>{editMode ? 'Editar tarea': 'Agregar tarea' }</h3>

            <form onSubmit={editMode ? saveTask : validateMessage}>
                {
                    error && <p style={{color: "red"}}>Escribe una tarea</p>
                }
                <input 
                    type="text" 
                    placeholder="Ejem. hacer ejercicios"
                    name="name"
                    value={editMode ? nameTask : name}
                    onChange={updateTask}
                />
                <input 
                    type="submit" 
                    value={editMode ? 'Guardar': 'Agregar'}
                />
            </form>
        </>
    )
}

export default Form;
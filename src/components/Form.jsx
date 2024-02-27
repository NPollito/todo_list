import { useState} from "react";

function Form({addTasks, editMode, setEditMode, setShowTable, nameTask, setNameTask, setUpdatedTask}) {

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
        setShowTable(true)

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
        <section className="m-auto form-size">
            <h3 className="fs-3 mb-3 color-sub-title">{editMode ? 'Editar tarea': 'Crear tareas' }</h3>

            <form 
                onSubmit={editMode ? saveTask : validateMessage} 
                className="d-flex gap-2 "
            >
                
                <input 
                    className="form-control" 
                    type="text"
                    placeholder="Ejem. leer"
                    name="name"
                    value={editMode ? nameTask : name}
                    onChange={updateTask}
                />
                <input 
                    className="btn btn-primary"
                    type="submit" 
                    value={editMode ? 'Guardar': 'Agregar'}
                />
            </form>
            {
                error && <p className="text-danger mt-2 fs-5">Texto vacío</p>
            }
        </section>
    )
}

export default Form;
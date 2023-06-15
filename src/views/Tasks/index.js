import {useState} from 'react'
import InputTask from './components/InputTask';
import SingleTask from './components/SingleTask';
import './style.css'

function Tasks(){
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleChange = function(event){
        setNewTask(event.target.value)
    }

    const handleClick =function(event){
        setTasks([...tasks, newTask])
        setNewTask("")
    }//spread operator

    const handleDelete = function(event){
        const newArray = tasks.filter(function(task, index){
            return index != event.target.name
        })
        setTasks(newArray)
    }

    return(
        <section id="tasks">
            <h1>Lista de Tareas</h1>
            <InputTask newTask={newTask} handleChange={handleChange} handleClick={handleClick}/>
            <ul>
                {
                    tasks.map((task, index)=><SingleTask key={index} index={index} task={task} handleDelete={handleDelete}/>)
                }
            </ul>
        </section>
    )
}

export default Tasks
import { useEffect, useState } from "react"
import {getAllTasks} from '../api/task.api'
import { TaskCard } from './TaskCard';

export   function TasksList() {

    // Arreglo donde guardo los datos, inicia como un arreglo vacio
    const [tasks, setTasks] = useState([])
    

    // Con esto lo digo que apenas arranque la pagina me ejecute esto de manera asincrona
    useEffect(() =>{
       async function loasTasks (){
            const rest = await getAllTasks()
            setTasks(rest.data)
        }
        loasTasks()
    }, []);


    // utilizo otro compoenente para mostrar los datos
  return ( 
    <div className="grid grid-cols-3 gap-3">
        {tasks.map(task =>(
            <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}







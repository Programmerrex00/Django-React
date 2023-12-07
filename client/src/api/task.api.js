import axios from 'axios'
// Api para consultar las tareas del back-end
// Guardando la direccon en una variable de axios
const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => tasksApi.get("/")

// Funcion para obtener la tarea
export const getTask = (id) => tasksApi.get(`/${id}/`)

export const createTask = (task) => tasksApi.post("/", task)
export const deleteTask = (id) => tasksApi.delete(`/${id}`)
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)


 

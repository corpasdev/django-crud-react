import axios from 'axios'

// crear instancia para no estar repetiendo lo de la ruta a la api
const tareaApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

//Obtener las tareas del backend
export const getAllTasks = () => tareaApi.get('/');

// Obtener una unica tarea
export const getTask = (id) => tareaApi.get(`/${id}/`);

// Crear tareas 
export const crearTarea = (tarea) =>  tareaApi.post('/', tarea);

// Eliminar tareas
export const eliminarTarea = (id) => tareaApi.delete('/'+id)

// Actulizar tareas
export const actualizarTarea = (id, tarea) => tareaApi.put(`/${id}/`, tarea)

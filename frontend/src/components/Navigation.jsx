import {Link} from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
        <Link to="/tareas">
            <h1>MisTareas</h1>
        </Link>
        <Link to="/crear-tarea">
            Crear tarea
        </Link>
    </nav>
  )
}

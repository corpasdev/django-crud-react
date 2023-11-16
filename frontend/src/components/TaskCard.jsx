import {useNavigate} from 'react-router-dom'

export const TaskCard = (
    {tarea}
) => {

  const navigate = useNavigate();


  return (
    <article style={{background: "orange"}} 
             onClick={()=> {
              navigate(`/tareas/${tarea.id}`)
             }}
    >
            <h1>{tarea.titulo}</h1>
            <p>{tarea.descripcion}</p>
            <span>{tarea.estado}</span>
    </article>
  )
}

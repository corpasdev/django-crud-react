import { useForm } from "react-hook-form";
import { crearTarea, eliminarTarea, actualizarTarea, getTask} from "../api/task.api";
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from "react";

export const TaskFormPage = () => {
  const [tarea, setTarea] = useState({});
  // usar las funciones de react-hook-form para manejar el formulario
  // registrar inputs
  const { register, handleSubmit, formState: {
    errors
  }, setValue} = useForm();

  const onSubmit = handleSubmit(async data => {
    if(parametros.id) {
      await actualizarTarea(parametros.id, data);
    } else {
      await crearTarea(data);
    }

    navigate("/tareas");
  })

  // redireccionar
  const navigate = useNavigate();

  //Obtenr parametros de la url
  const parametros = useParams();

  useEffect(() => {
    async function obtenerTarea() {
      const {data} = await getTask(parametros.id);
      setValue('titulo', data.titulo)
      setValue('descripcion', data.descripcion)
    }

    obtenerTarea();
  }, [])

  return (
    <>
    <form onSubmit={onSubmit} className="form-task">
      <input type="text" placeholder="title" {...register("titulo", {required: true})}/>
      {errors.titulo && <span>El titulo es requerido</span>}
      <textarea
        placeholder="Descripción de la tarea"
        cols="30"
        rows="10"
        {...register("descripcion", {required: true})}
      >
      </textarea>
      {errors.titulo && <span>La descrición es requerida</span>}
      <button>Guardar</button>
    </form>
    {
        parametros.id && <button onClick={
          async ()=> {
           const aceptado =  window.confirm('Estas seguro de eliminar la tarea?');

           if(aceptado) {
            await eliminarTarea(parametros.id);
            navigate("/tareas");
           }
          }
        }>Eliminar</button>
      }
    </>
  );
};

import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export const TasksList = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function cargarTareas() {
      const rest = await getAllTasks();
      setTareas(rest.data);
    }

    cargarTareas();
  }, []);

  return (
    <ul>
      {tareas.length == 0
        ? "No hay tareas"
        : tareas.map((tarea) => {
            return <TaskCard key={tarea.id} tarea={tarea} />;
          })}
    </ul>
  );
};

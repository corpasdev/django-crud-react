import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {TaskPage} from './pages/TaskPage'
import {Navigation} from './components/Navigation'
import {TaskFormPage} from './pages/TaskFormPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to="/tareas"/>}/>
        <Route path='/tareas' element={<TaskPage/>}/>
        <Route path='/crear-tarea' element={<TaskFormPage/>}/>
        {/* :id - parametro dinámico */}
        <Route path='/tareas/:id' element={<TaskFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
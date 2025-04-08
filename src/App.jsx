import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskStats from './components/TaskStats/TaskStats'


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [filter, setFilter] = useState('all')
  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), completed: false }])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ))
    setEditingTask(null)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-warm-800">Gestor de Tareas</h1>

      <div className="hidden md:flex justify-center items-start">
      <div className="bg-warm-50 border border-warm-100 rounded-2xl shadow-soft p-8 flex gap-8 w-full max-w-5xl">
        {/* Página izquierda */}
        <div className="w-1/2 flex flex-col gap-4">
          <TaskForm 
            addTask={addTask} 
            editingTask={editingTask}
            updateTask={updateTask}
          />
        </div>

        {/* Página derecha */}
        <div className="w-1/2 flex flex-col gap-4">
          <TaskFilter currentFilter={filter} setFilter={setFilter} />
          <TaskStats tasks={tasks} />
          <TaskList 
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setEditingTask={setEditingTask}
          />
        </div>
      </div>
    </div>


      {/* Vista móvil apilada */}
      <div className="md:hidden flex flex-col gap-6">
        <TaskForm 
          addTask={addTask} 
          editingTask={editingTask}
          updateTask={updateTask}
        />
        <TaskFilter currentFilter={filter} setFilter={setFilter} />
        <TaskStats tasks={tasks} />
        <TaskList 
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setEditingTask={setEditingTask}
        />
      </div>
    </div>
  )
}


export default App
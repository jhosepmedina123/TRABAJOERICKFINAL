import { useState, useEffect } from 'react'

function TaskForm({ addTask, editingTask, updateTask }) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text)
    }
  }, [editingTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return

    const task = { text }
    if (editingTask) {
      updateTask({ ...editingTask, text })
    } else {
      addTask(task)
    }
    setText('')
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mb-6 flex flex-col gap-4 bg-sunny-100 p-4 rounded-xl shadow-soft"
    >
      <input
        type="text"
        placeholder="Escribe tu tarea aquí..."
        className="p-3 rounded-lg border border-warm-200 focus:outline-none focus:ring-2 focus:ring-warm-400 transition"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-warm-400 hover:bg-warm-600 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        {editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  )
}

export default TaskForm

import { useState, useEffect } from 'react'

function TaskForm({ addTask, editingTask, updateTask }) {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text)
      setDescription(editingTask.description || '')
      setShowDescription(true)
    }
  }, [editingTask])

  const handleTitleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return
    setShowDescription(true)
  }

  const handleFinalSubmit = (e) => {
    e.preventDefault()
    const task = { text, description }

    if (editingTask) {
      updateTask({ ...editingTask, ...task })
    } else {
      addTask(task)
    }

    setText('')
    setDescription('')
    setShowDescription(false)
  }

  return (
    <form 
      onSubmit={showDescription ? handleFinalSubmit : handleTitleSubmit}
      className="mb-6 flex flex-col gap-4 bg-sunny-100 p-4 rounded-xl shadow-soft"
    >
      <input
        type="text"
        placeholder="Escribe tu tarea aquí..."
        className="p-3 rounded-lg border border-warm-200 focus:outline-none focus:ring-2 focus:ring-warm-400 transition"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={showDescription}
      />

      {showDescription && (
        <textarea
          placeholder="Agrega una descripción opcional..."
          className="p-3 rounded-lg border border-warm-200 focus:outline-none focus:ring-2 focus:ring-warm-400 transition resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      )}

      <button 
        type="submit" 
        className="bg-warm-400 hover:bg-warm-600 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        {editingTask
          ? 'Actualizar Tarea'
          : showDescription
            ? 'Guardar Tarea'
            : 'Agregar Tarea'}
      </button>
    </form>
  )
}

export default TaskForm

function TaskList({ tasks, deleteTask, toggleComplete, setEditingTask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-warm-600 font-medium mt-4">
        No hay tareas por ahora... ¡relax y a disfrutar! ☀️
      </p>
    )
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-white p-4 rounded-xl shadow-soft border border-warm-100"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            {/* Parte izquierda: texto y descripción */}
            <div className="flex-1">
              <h3 className={`text-lg font-semibold ${
                task.completed ? 'line-through text-warm-400' : 'text-warm-800'
              }`}>
                {task.text}
              </h3>
              {task.description && (
                <p className="text-sm text-warm-600 mt-1">
                  {task.description}
                </p>
              )}
            </div>

            {/* Parte derecha: botones */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-1 justify-end sm:justify-start">
              <button
                onClick={() => toggleComplete(task.id)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                  task.completed
                    ? 'bg-sunny-100 text-warm-600 hover:bg-sunny-200'
                    : 'bg-warm-200 text-warm-800 hover:bg-warm-300'
                }`}
              >
                {task.completed ? 'Desmarcar' : 'Completar'}
              </button>

              <button
                onClick={() => setEditingTask(task)}
                className="bg-sunny-50 text-warm-800 hover:bg-sunny-100 px-3 py-1 rounded-lg text-sm font-medium transition"
              >
                Editar
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 rounded-lg text-sm font-medium transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList

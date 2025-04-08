function TaskStats({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter(task => task.completed).length
  const remaining = total - completed

  return (
    <div className="bg-sunny-100 text-warm-800 p-4 rounded-xl mb-6 shadow-soft flex justify-between items-center text-sm sm:text-base">
      <p>
        <span className="font-semibold">{total}</span> tareas en total
      </p>
      <p>
        <span className="font-semibold">{completed}</span> completadas
      </p>
      <p>
        <span className="font-semibold">{remaining}</span> pendientes
      </p>
    </div>
  )
}

export default TaskStats

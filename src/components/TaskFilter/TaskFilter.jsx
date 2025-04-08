function TaskFilter({ currentFilter, setFilter }) {
  const filters = [
    { label: 'Todas', value: 'all' },
    { label: 'Activas', value: 'active' },
    { label: 'Completadas', value: 'completed' },
  ]

  return (
    <div className="flex justify-end mb-6">
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setFilter(filter.value)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition ${
              currentFilter === filter.value
                ? 'bg-warm-400 text-white shadow-sm'
                : 'bg-sunny-100 text-warm-700 hover:bg-sunny-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TaskFilter

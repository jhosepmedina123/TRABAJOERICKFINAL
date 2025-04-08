
import { useState } from 'react'

export default function TaskItem({ task, deleteTask, toggleComplete, setEditingTask }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow transition-all duration-200 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <div className="flex-1">
            <h3 className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {task.title}
            </h3>
            {task.description && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-gray-500 hover:text-gray-700 mt-1"
              >
                {isExpanded ? 'Ocultar' : 'Ver más'} →
              </button>
            )}
          </div>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => setEditingTask(task)}
            className="text-blue-500 hover:text-blue-700"
            aria-label="Editar"
          >
            ✏️
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
            aria-label="Eliminar"
          >
            🗑️
          </button>
        </div>
      </div>
      
      {isExpanded && task.description && (
        <p className="mt-2 text-gray-600 pl-8 border-l-2 border-blue-200">
          {task.description}
        </p>
      )}
    </div>
  )
}
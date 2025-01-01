import React from 'react';
import { format } from 'date-fns';
import { Clock, Flag, Archive, CheckCircle, Trash2 } from 'lucide-react';
import { Task } from '../types/task';
import { useStore } from '../store/useStore';

interface TaskCardProps {
  task: Task;
}

const priorityColors = {
  low: 'bg-teal-100 text-teal-800',
  medium: 'bg-orange-100 text-orange-800',
  high: 'bg-red-100 text-red-800',
};

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { completeTask, archiveTask, deleteTask } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => completeTask(task.id)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <CheckCircle className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => archiveTask(task.id)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <Archive className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <Trash2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="mt-2 text-gray-600">{task.description}</div>
      
      <div className="mt-3 flex items-center space-x-4">
        {task.dueDate && (
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {format(new Date(task.dueDate), 'MMM d, yyyy')}
          </div>
        )}
        <div className={`px-2 py-1 rounded-full text-xs ${priorityColors[task.priority]}`}>
          <Flag className="w-3 h-3 inline mr-1" />
          {task.priority}
        </div>
      </div>
    </div>
  );
};
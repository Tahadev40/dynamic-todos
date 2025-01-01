import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const TaskSummary: React.FC = () => {
  const tasks = useStore((state) => state.tasks);
  
  const summary = {
    pending: tasks.filter(t => !t.completed && !t.archived).length,
    completed: tasks.filter(t => t.completed && !t.archived).length,
    overdue: tasks.filter(t => {
      if (!t.dueDate || t.completed || t.archived) return false;
      return new Date(t.dueDate) < new Date();
    }).length
  };

  const total = summary.pending + summary.completed;
  const completionRate = total ? Math.round((summary.completed / total) * 100) : 0;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Task Summary</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>Pending</span>
          </div>
          <span className="font-medium">{summary.pending}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>Completed</span>
          </div>
          <span className="font-medium">{summary.completed}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Overdue</span>
          </div>
          <span className="font-medium text-red-500">{summary.overdue}</span>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
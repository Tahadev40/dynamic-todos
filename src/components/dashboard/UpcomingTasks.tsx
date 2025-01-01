import React from 'react';
import { Clock } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { format, isWithinInterval, addHours } from 'date-fns';

export const UpcomingTasks: React.FC = () => {
  const tasks = useStore((state) => state.tasks);
  
  const upcoming = tasks.filter(t => {
    if (!t.dueDate || t.completed || t.archived) return false;
    const dueDate = new Date(t.dueDate);
    return isWithinInterval(dueDate, {
      start: new Date(),
      end: addHours(new Date(), 24)
    });
  });

  if (upcoming.length === 0) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
        <p className="text-gray-500 text-sm">No tasks due in the next 24 hours</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
      <div className="space-y-3">
        {upcoming.map(task => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">{task.title}</span>
            </div>
            <span className="text-sm text-gray-500">
              {format(new Date(task.dueDate!), 'h:mm a')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
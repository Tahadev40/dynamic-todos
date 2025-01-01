import React from 'react';
import { TaskCard } from './TaskCard';
import { useStore } from '../store/useStore';

export const TaskList: React.FC = () => {
  const tasks = useStore((state) => state.tasks);
  const activeTasks = tasks.filter((task) => !task.archived);

  return (
    <div className="space-y-4">
      {activeTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
import React from 'react';
import { TaskSummary } from './TaskSummary';
import { DailyProgress } from './DailyProgress';
import { UpcomingTasks } from './UpcomingTasks';
import { FocusTimer } from './FocusTimer';

export const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <TaskSummary />
      <DailyProgress />
      <UpcomingTasks />
      <FocusTimer />
    </div>
  );
};
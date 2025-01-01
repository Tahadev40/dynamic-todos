import React from 'react';
import { Trophy } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { isToday } from 'date-fns';

export const DailyProgress: React.FC = () => {
  const tasks = useStore((state) => state.tasks);
  
  const todaysTasks = tasks.filter(t => isToday(new Date(t.createdAt)) && !t.archived);
  const completedToday = todaysTasks.filter(t => t.completed).length;
  const completionRate = todaysTasks.length ? Math.round((completedToday / todaysTasks.length) * 100) : 0;

  const getMessage = (rate: number) => {
    if (rate === 100) return "Amazing job! You've completed all tasks today! 🎉";
    if (rate >= 75) return "You're crushing it today! Keep going! 💪";
    if (rate >= 50) return "Halfway there! You're making great progress! 🚀";
    if (rate >= 25) return "You're building momentum! Keep it up! 📈";
    return "Every task completed is a step forward! 🌟";
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Today's Progress</h3>
        <Trophy className="w-5 h-5 text-yellow-500" />
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Completed today</span>
          <span className="font-medium">{completedToday}/{todaysTasks.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-teal-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">{getMessage(completionRate)}</p>
      </div>
    </div>
  );
};
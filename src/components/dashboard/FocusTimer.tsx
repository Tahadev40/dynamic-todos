import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const FocusTimer: React.FC = () => {
  const [timeSpent, setTimeSpent] = useState(() => {
    const saved = localStorage.getItem('focusTime');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => {
        const newTime = prev + 1;
        localStorage.setItem('focusTime', newTime.toString());
        return newTime;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Focus Time</h3>
        <Timer className="w-5 h-5 text-teal-500" />
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-700">{formatTime(timeSpent)}</div>
        <p className="text-sm text-gray-500 mt-1">Time spent today</p>
      </div>
    </div>
  );
};
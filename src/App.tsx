import React, { useState } from 'react';
import { Plus, Calendar, Archive, Settings } from 'lucide-react';
import { TaskList } from './components/TaskList';
import { AddTaskModal } from './components/AddTaskModal';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Elegant Todo</h1>
            <div className="flex space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Archive className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard />
        <div className="mt-8">
          <TaskList />
        </div>
      </main>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed right-8 bottom-16 p-4 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-colors"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Add Task Modal */}
      <AddTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

      {/* Inspirational Message */}
      <footer className="fixed bottom-0 w-full bg-white shadow-lg-up">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-600">
          "Every small step leads to success. Keep going!"
        </div>
      </footer>
    </div>
  );
}

export default App;
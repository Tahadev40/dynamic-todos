import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskTemplate } from '../types/task';

interface TodoStore {
  tasks: Task[];
  templates: TaskTemplate[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  completeTask: (id: string) => void;
  archiveTask: (id: string) => void;
  deleteTask: (id: string) => void;
  addTemplate: (template: Omit<TaskTemplate, 'id'>) => void;
}

export const useStore = create<TodoStore>()(
  persist(
    (set) => ({
      tasks: [],
      templates: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: crypto.randomUUID(),
              createdAt: new Date(),
            },
          ],
        })),
      completeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: true } : task
          ),
        })),
      archiveTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, archived: true } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      addTemplate: (template) =>
        set((state) => ({
          templates: [
            ...state.templates,
            { ...template, id: crypto.randomUUID() },
          ],
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
);
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
  category?: string;
  dependencies?: string[];
  archived: boolean;
  tags?: string[];
  emotionTag?: string;
  pomodoroCount?: number;
}

export interface TaskTemplate {
  id: string;
  name: string;
  description: string;
  defaultPriority: Task['priority'];
  defaultCategory?: string;
  subtasks: string[];
}
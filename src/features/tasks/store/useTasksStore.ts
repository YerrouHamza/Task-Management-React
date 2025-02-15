import { create } from 'zustand';
import { TaskType } from '../types';
import { defaultTasks } from '../fakeData';

interface TaskState {
  tasks: TaskType[];
  addTask: (task: Omit<TaskType, 'id'>) => void;
  updateTask: (id: number, updatedTask: Partial<TaskType>) => void;
  toggleTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
}

export const useTasks = create<TaskState>((set) => ({
  tasks: defaultTasks,

  addTask: (task) =>
    set((state) => {
      const newTask: TaskType = { id: state.tasks.length + 1, ...task };
      const updatedTasks = [...state.tasks, newTask];

      return { tasks: updatedTasks };
    }),

  updateTask: (id, task) =>
    set((state) => {
      const targetIndex = state.tasks.findIndex((item) => item.id === id);
      const targetTask = state.tasks[targetIndex];

      const updatedTask = { ...targetTask, ...task };

      const newTask = [...state.tasks];
      newTask.splice(targetIndex, 1, updatedTask);

      return { tasks: newTask };
    }),

  toggleTaskStatus: (id) =>
    set((state) => {
      const targetIndex = state.tasks.findIndex((item) => item.id === id);
      const targetTask = state.tasks[targetIndex];

      targetTask.status =
        targetTask.status === 'completed'
          ? 'pending'
          : ('completed' as TaskType['status']);

      const newTasks = [...state.tasks];
      newTasks.splice(targetIndex, 1, targetTask);

      return { tasks: newTasks };
    }),

  deleteTask: (id) =>
    set((state) => {
      const targetIndex = state.tasks.findIndex((item) => item.id === id);
      const newTasks = [...state.tasks];
      newTasks.splice(targetIndex, 1);

      return { tasks: newTasks };
    }),

  moveTask: (dragIndex, hoverIndex) =>
    set((state) => {
      if (dragIndex === hoverIndex) return {};

      const newTasks = [...state.tasks];
      const [movedTask] = newTasks.splice(dragIndex, 1);
      newTasks.splice(hoverIndex, 0, movedTask);

      return { tasks: newTasks };
    }),
}));

import { create } from "zustand";
import { TaskType } from "../types";
import { defaultTasks } from "../fakeData";

interface TaskState {
  tasks: TaskType[];
  addTask: (task: Omit<TaskType, "id">) => void;
  updateTask: (id: number, updatedTask: Partial<TaskType>) => void;
  toggleTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const useTasks = create<TaskState>((set) => ({
  tasks: defaultTasks,

  addTask: (task) =>
    set((state) => {
      const newTask: TaskType = {
        id: state.tasks.length + 1,
        ...task,
      };
      const updatedTasks = [...state.tasks, newTask];
      return { tasks: updatedTasks };
    }),

  updateTask: (id, updatedTask) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );
      return { tasks: updatedTasks };
    }),

  toggleTaskStatus: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "completed" ? "pending" : "completed" as TaskType["status"] }
          : task
      );
      return { tasks: updatedTasks };
    }),

  deleteTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      return { tasks: updatedTasks };
    }),
}));

export type TaskStatus = "pending" | "completed";

export type Task = {
  id: number;
  todo: string;
  status: TaskStatus;
}
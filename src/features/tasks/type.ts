export type TaskStatus = "pending" | "completed";

export type TaskType = {
  id: number;
  todo: string;
  status: TaskStatus;
}
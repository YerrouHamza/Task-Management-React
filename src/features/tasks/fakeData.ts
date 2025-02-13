
import { Task } from "@/features/tasks/type";

export const defaultTasks: Task[] = [
    {
        id: 1,
        todo: "Design Homepage UI",
        status: "pending",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        todo: "Fix login bug",
        status: "pending",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        todo: "Write unit tests",
        status: "completed",
        createdAt: new Date().toISOString(),
    },
    {
        id: 4,
        todo: "Update user profile page",
        status: "pending",
        createdAt: new Date().toISOString(),
    },
    {
        id: 5,
        todo: "Optimize database queries",
        status: "pending",
        createdAt: new Date().toISOString(),
    }
];
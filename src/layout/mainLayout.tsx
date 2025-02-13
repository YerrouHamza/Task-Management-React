import { ReactNode } from "react";

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <main className="min-h-screen h-full w-full max-w-screen-lg mx-auto my-10 font-poppins">
      <div className="w-full mb-6">
        <h1 className="text-gray-700 text-4xl font-semibold mb-1">Task Manager</h1>
        <p className="text-base text-gray-500">Manage your tasks with ease and simplicity, add new tasks, mark them as completed and delete them.</p>
      </div>
      {children}
    </main>
  )
}

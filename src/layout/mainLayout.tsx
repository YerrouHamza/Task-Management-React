import React from "react";
import AppTitle from "@/components/appTitle";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full w-full max-w-screen-lg mx-auto my-10 font-poppins px-5">
      <AppTitle />
      {children}
    </main>
  );
}
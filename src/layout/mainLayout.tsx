import React from "react";
import AppTitle from "@/components/appTitle";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen h-full w-full max-w-screen-lg mx-auto my-10 font-poppins">
     <AppTitle />
      {children}
    </main>
  );
}
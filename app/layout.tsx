"use client";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

// Note: We can use next/fonts to improve performance by optimizing font loading and reducing layout shifts. 
// This can lead to faster page loads and a better user experience. However, for the lack of time, I didn't use it.

// Note: I didn't add a favicon for the lack of time. Adding a favicon enhances branding and user experience.

export const metadata: Metadata = {
  title: "Task Management App",
  description: "A task management application to help you organize and manage your tasks efficiently.",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  applicationName: "Task Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFFFFF]">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
          <div className="hidden md:block md:col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-9 flex flex-col">
            <Header />
            <main className="p-5">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

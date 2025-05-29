'use client';
import './globals.css';
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar"; // your Sidebar component

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showSidebar = !pathname.startsWith("/login");

  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <SessionProvider>
          <div className="flex min-h-screen">
            {showSidebar && <Sidebar />}
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
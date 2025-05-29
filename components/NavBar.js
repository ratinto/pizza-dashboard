"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/dashboard" className="font-semibold text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link href="/pizza-orders" className="font-semibold text-gray-700 hover:text-blue-600">Pizza Orders</Link>
      </div>
      {session && (
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Hi, {session.user.name}</span>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >Logout</button>
        </div>
      )}
    </nav>
  );
}